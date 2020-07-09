<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Suku;
use Faker\Generator as Faker;

$factory->define(Suku::class, function (Faker $faker) {
    return [
        //
        'nama_suku' => $faker->name()
    ];
});
