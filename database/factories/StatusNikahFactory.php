<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(App\StatusNikah::class, function (Faker $faker) {
    return [
        //
        'status_nikah' => $faker->name()
    ];
});
