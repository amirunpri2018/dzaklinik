<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pasien;
use App\PasienIbu;
use Faker\Generator as Faker;

$factory->define(PasienIbu::class, function (Faker $faker) {
    return [
        //
        'pasien_id' => factory(Pasien::class)->create(),
        'nama' => $faker->name('female'),
        'alamat' => $faker->address,
        'telepon' => $faker->phoneNumber,
    ];
});
