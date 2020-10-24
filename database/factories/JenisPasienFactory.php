<?php

namespace Database\Factories;

use App\JenisPasien;
use Illuminate\Database\Eloquent\Factories\Factory;

class JenisPasienFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = JenisPasien::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'jenis' => $this->faker->randomLetter
        ];
    }
}
