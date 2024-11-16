<?php

namespace Database\Seeders;

use App\Models\Block;
use App\Models\Classroom;
use App\Models\DayBlock;
use App\Models\Section;
use App\Models\Subject;
use App\Models\Teacher;
use App\Models\Term;
use App\Models\TimeBlock;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Ramsey\Uuid\Type\Time;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Matemática Básica | LUN-MIE | 07:00-08:30 | Rafael Matienzo | EMG 101
        Section::create([
            'subject_id' => 'FBTMM01',
            'section_number' => 1,
            'academic_year_id' => 2324,
            'term_id' => 3,
            'teacher_id' => 10000000,
            'day_block_id' => 'LUN-MIE',
            'time_block_id' => 1,
            'block_id' => 'EMG',
            'classroom_id' => 101,
            'section_description' => "Sección 1 de - del trimestre - del año académico -",
            'section_capacity' => 30,
        ]);

        // Introducción a la Ingenieria | LUN-MIE | 08:45-10:15 | María del Pilar | A3-110
        Section::create([
            'subject_id' => 'FBTSP03',
            'section_number' => 1,
            'academic_year_id' => 2324,
            'term_id' => 3,
            'teacher_id' => 19876543,
            'day_block_id' => 'LUN-MIE',
            'time_block_id' => 2,
            'block_id' => 'A3',
            'classroom_id' => 110,
            'section_description' => "Sección 1 de - del trimestre - del año académico -",
            'section_capacity' => 25,
        ]);

        // Pensamiento Computacional | MAR-JUE | 07:00-08:30 | Julio Walter | A1-105
        Section::create([
            'subject_id' => 'FBTSP04',
            'section_number' => 1,
            'academic_year_id' => 2324,
            'term_id' => 3,
            'teacher_id' => 14567832,
            'day_block_id' => 'MAR-JUE',
            'time_block_id' => 1,
            'block_id' => 'A1',
            'classroom_id' => 105,
            'section_description' => "Sección 1 de - del trimestre - del año académico -",
            'section_capacity' => 40,
        ]);

        // Competencias en Acción | MAR-JUE | 08:45-10:15 | Christian Guillén | A2-103
        Section::create([
            'subject_id' => 'FBTEM01',
            'section_number' => 1,
            'academic_year_id' => 2324,
            'term_id' => 3,
            'teacher_id' => 16543210,
            'day_block_id' => 'MAR-JUE',
            'time_block_id' => 2,
            'block_id' => 'A2',
            'classroom_id' => 103,
            'section_description' => "Sección 1 de - del trimestre - del año académico -",
            'section_capacity' => 30,
        ]);

        // Inglés IV | VIE | 07:00-08:30 | Adolfo Leonard | EMG-101
        Section::create([
            'subject_id' => 'FBTIN04',
            'section_number' => 1,
            'academic_year_id' => 2324,
            'term_id' => 3,
            'teacher_id' => 14567890,
            'day_block_id' => 'VIE',
            'time_block_id' => 1,
            'block_id' => 'EMG',
            'classroom_id' => 101,
            'section_description' => "Sección 1 de - del trimestre - del año académico -",
            'section_capacity' => 30,
        ]);
}
}
