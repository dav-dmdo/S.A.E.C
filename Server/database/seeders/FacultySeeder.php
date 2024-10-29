<?php

namespace Database\Seeders;

use App\Models\Faculty;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FacultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faculty = new Faculty();
        $faculty->faculty_name = "Facultad de Ingeniería";
        $faculty->faculty_description = "Facultad de Ingeniería";
        $faculty->save();
    }
}
