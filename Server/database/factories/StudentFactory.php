<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_ci' => User::inRandomOrder()->first()->user_ci,
            'student_card_id' => $this->faker->unique()->numerify('SCID-########'),
            'student_enrollment_date' => $this->faker->dateTimeBetween('-5 years', 'now')
        ];
    }
}
