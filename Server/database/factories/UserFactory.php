<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_ci' => fake()->unique()->numberBetween(1000000, 99999999),
            'user_first_name' => fake()->firstName(),
            'user_middle_name' => fake()->firstName(),
            'user_first_surname' => fake()->lastName(),
            'user_second_surname' => fake()->lastName(),
            'user_gender' => fake()->randomElement(['Masculino', 'Femenino']),
            'user_birthdate' => fake()->date('d-m-Y'),
            'username' => fake()->userName(),
            'user_email' => fake()->unique()->safeEmail(),
            
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10)
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
