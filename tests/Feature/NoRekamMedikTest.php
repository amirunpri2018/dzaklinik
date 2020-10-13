<?php

namespace Tests\Feature;

use App\Pasien;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class NoRekamMedikTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function generate_no_rekam_medis_from_one()
    {
        $noRekamMedis = Pasien::generateNoRekamMedis();

        $this->assertEquals($noRekamMedis, 1);
    }

    /** @test */
    public function generate_no_rekam_medis_become_two_after_one()
    {
        factory(Pasien::class)->create();

        $noRekamMedis = Pasien::generateNoRekamMedis();

        $this->assertEquals($noRekamMedis, 2);
    }

    /** @test */
    public function generate_no_rekam_medis_become_three_after_two()
    {
        factory(Pasien::class, 2)->create();

        $noRekamMedis = Pasien::generateNoRekamMedis();

        $this->assertEquals($noRekamMedis, 3);
    }

    /** @test */
    public function no_rekam_medis_zero_six_pad_left()
    {
        $pasien = factory(Pasien::class)->create();

        $this->assertEquals($pasien->nomor_rekam_medik, '000001');
    }
}
