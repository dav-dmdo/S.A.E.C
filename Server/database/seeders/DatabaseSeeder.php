<?php

namespace Database\Seeders;

use App\Models\AcademicYear;
use App\Models\User;
use Database\Factories\AcademicYearFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Creación de 10 filas en 'laravel/users/'
        User::factory(10)->create();
        // AcademicYear::factory(10)->create();
        $this->call([
            AcademicYearSeeder::class,
            TermSeeder::class,
        ]);
    }
}
