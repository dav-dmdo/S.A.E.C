<?php

namespace Database\Seeders;

use App\Models\AcademicYear;
use App\Models\Faculty;
use App\Models\Student;
use App\Models\Teacher;
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
        $this->call([
            UserSeeder::class,
            FacultySeeder::class,
            SchoolSeeder::class,
            DepartmentSeeder::class
        ]);
    }

    private function structureUniversity() {
    }
}
