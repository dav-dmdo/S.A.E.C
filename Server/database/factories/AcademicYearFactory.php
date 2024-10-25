<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AcademicYear>
 */
class AcademicYearFactory extends Factory
{
    protected $table = 'academic_years';
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $startDate = Carbon::parse(fake()->date('d-m-Y', 'now'));

        return [
            'academic_year_id' => fake()->numberBetween(1, 100),
            'academic_year_start_date' => $startDate->format('d-m-Y'),
            'academic_year_end_date' => $startDate->addYear()->format('d-m-Y'),
            'academic_year_description' => fake()->sentence(),
        ];
    }
}
