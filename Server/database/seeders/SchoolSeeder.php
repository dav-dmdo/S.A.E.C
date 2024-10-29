<?php

namespace Database\Seeders;

use App\Models\School;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $school = new School();
        $school->faculty_id = 1;
        $school->school_name = "Escuela de Ingeniería en Ingeniería";
        $school->school_description = "Escuela de Ingeniería en Sistemas";
        $school->save();
    }
}
