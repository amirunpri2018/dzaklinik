<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Kecamatan;
use Faker\Generator as Faker;

$factory->define(Kecamatan::class, function (Faker $faker) {
    return [
        //
        'kota_id' => factory(App\Kota::class)->create(),
        'nama_kecamatan' => $faker->name()
    ];
});
