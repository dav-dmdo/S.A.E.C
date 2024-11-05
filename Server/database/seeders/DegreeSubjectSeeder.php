<?php

namespace Database\Seeders;

use App\Models\Degree;
use App\Models\Subject;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DegreeSubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $system_degree = Degree::find(5);
        $subjects = Subject::all();

        // NO SE LOGRA CREAR LAS FILAS
        foreach ($subjects as $subject) {
            $system_degree->subjects()->attach($subject->subject_id);
        }
    }
}
