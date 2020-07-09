<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Kecamatan;
use App\Kelurahan;
use Faker\Generator as Faker;

$factory->define(Kelurahan::class, function (Faker $faker) {
    return [
        //
        'kecamatan_id' => factory(Kecamatan::class)->create(),
        'nama_kelurahan' => $faker->name()
    ];
});
