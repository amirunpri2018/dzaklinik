<?php

namespace Tests\Feature;

use App\Kecamatan;
use App\Kelurahan;
use App\Kota;
use App\Pasien;
use App\PasienAyah;
use App\PasienIbu;
use App\PasienPasangan;
use App\Provinsi;
use App\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreatePasienTest extends TestCase
{
    use DatabaseTransactions;
    /** @test */
    public function belongsto_pasien()
    {
        $pasien = factory(Pasien::class)->create();
        $pasienId = ['pasien_id' => $pasien->id];
        $pasienAyah = factory(PasienAyah::class)->create($pasienId);
        $pasienIbu = factory(PasienIbu::class)->create($pasienId);
        $pasienPasangan = factory(PasienPasangan::class)->create($pasienId);

        $this->assertTrue($pasien->provinsi instanceof Provinsi);
        $this->assertTrue($pasien->kota instanceof Kota);
        $this->assertTrue($pasien->kecamatan instanceof Kecamatan);
        $this->assertTrue($pasien->kelurahan instanceof Kelurahan);
        $this->assertTrue($pasien->ayah instanceof $pasienAyah);
        $this->assertTrue($pasien->ibu instanceof $pasienIbu);
        $this->assertTrue($pasien->pasangan instanceof $pasienPasangan);
    }
}
