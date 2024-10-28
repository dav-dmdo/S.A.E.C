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
        // Con factory
        $this->call([
            UserSeeder::class
        ]);

        // Sin factory
        $this->structureUniversity();
    }

    private function structureUniversity() {
        $facultad = new Faculty();
        $facultad->faculty_name = "Facultad de Ingeniería";
        $facultad->faculty_description = "Facultad de Ingeniería";
        $facultad->save();

        
    }
}
