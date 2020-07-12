<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Agama;
use App\Pasien;
use App\PasienPasangan;
use App\Pendidikan;
use App\Suku;
use Faker\Generator as Faker;

$factory->define(PasienPasangan::class, function (Faker $faker) {
    return [
        //
        'pasien_id' => factory(Pasien::class)->create(),
        'nama' => $faker->name('male'),
        'alamat' => $faker->address,
        'telepon' => $faker->phoneNumber,
        'tanggal_lahir' => $faker->date("Y-m-d"),
        'pekerjaan' => $faker->name(),
        'pendidikan_id' => factory(Pendidikan::class)->create(),
        'agama_id' => factory(Agama::class)->create(),
        'suku_id' => factory(Suku::class)->create()
    ];
});
