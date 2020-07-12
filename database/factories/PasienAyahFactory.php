<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pasien;
use App\PasienAyah;
use Faker\Generator as Faker;

$factory->define(PasienAyah::class, function (Faker $faker) {
    return [
        //
        'pasien_id' => factory(Pasien::class)->create(),
        'nama' => $faker->name('male'),
        'alamat' => $faker->address,
        'telepon' => $faker->phoneNumber,
    ];
});
