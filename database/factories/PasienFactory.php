<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Agama;
use App\Kecamatan;
use App\Kelurahan;
use App\Kota;
use App\Pasien;
use App\Pendidikan;
use App\Provinsi;
use App\StatusNikah;
use App\Suku;
use Faker\Generator as Faker;

$factory->define(Pasien::class, function (Faker $faker) {
    return [
        //
        'nomor_rekam_medik' => $faker->randomDigit,
        'nama_pasien' => $faker->name(),
        'nik' => $faker->randomDigit,
        'tempat_lahir' => $faker->name(),
        'tanggal_lahir' => $faker->date('Y-m-d'),
        'jenis_kelamin' => $faker->randomElement(['l', 'p']),
        'status_nikah_id' => factory(StatusNikah::class)->create(),
        'suku_id' => factory(Suku::class)->create(),
        'agama_id' => factory(Agama::class)->create(),
        'provinsi_id' => factory(Provinsi::class)->create(),
        'kota_id' => factory(Kota::class)->create(),
        'kecamatan_id' => factory(Kecamatan::class)->create(),
        'kelurahan_id' => factory(Kelurahan::class)->create(),
        'pendidikan_id' => factory(Pendidikan::class)->create(),
        'alamat' => $faker->address,
        'rtrw' => "012",
        'kodepos' => "76125",
        'email' => $faker->email,
        'alergi' => $faker->name,
    ];
});
