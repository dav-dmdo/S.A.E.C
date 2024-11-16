<?php

namespace Database\Seeders;

use App\Models\Section;
use App\Models\Student;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SectionStudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Extraer los 5 estudiantes
        $students = Student::all();

        // Inscripción de los 5 estudiantes a las 5 materias
        for ($i = 1; $i <= Section::all()->count(); $i++) {
            $section = Section::find($i);

            foreach ($students as $student) {
                $section->students()->attach($student->user_ci, ['status' => 'In Progress']);
            }
        }
    }
}
