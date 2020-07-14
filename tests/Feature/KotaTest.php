<?php

namespace Tests\Feature;

use App\Kecamatan;
use App\Kota;
use App\Provinsi;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class KotaTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_belongsto_provinsi()
    {
        $kota = factory(Kota::class)->create();

        $this->assertTrue($kota->provinsi instanceof Provinsi);
    }

    /** @test */
    public function it_hasMany_kecamatan()
    {
        $kecamatan = factory(Kecamatan::class)->create();

        $this->assertTrue($kecamatan->kota instanceof Kota);
    }
}
