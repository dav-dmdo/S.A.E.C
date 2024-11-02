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
        // $subjects = Subject::all();
        // $terms = Term::all();
        // $lastTerm = count($terms)>0 ? $terms[count($terms) - 1]: null;
        // $teacher = Teacher::all()->first();
        // $lunMieDayBlock = TimeBlock::where([
        //     ['day_block_id', 'LUN-MIE'],
        //     ['time_block_start_time','07:00:00']
        //     ])->first();
        // $emgBlock = Classroom::where([
        //     ['block_id', 'EMG'],
        //     ['classroom_id', 101]])->first();

        // if ($subjects->isNotEmpty() && $lastTerm && $teacher && $lunMieDayBlock && $emgBlock)
        // {

        // Section::create([
        //     'subject_id' => $subjects[0]->subject_id,
        //     'section_number' => 1,
        //     'academic_year_id' => $lastTerm->academic_year_id,
        //     'term_id' => $lastTerm->term_id,
        //     'teacher_id' => $teacher->user_ci,
        //     'day_block_id' => $lunMieDayBlock->day_block_id,
        //     'time_block_id' => $lunMieDayBlock->time_block_id,
        //     'block_id' => $emgBlock->block_id,
        //     'classroom_id' => $emgBlock->classroom_id,
        //     'section_description' => "Sección 1 de {$subjects[0]->subject_name} del trimestre {$lastTerm->term_type} del año académico {$lastTerm->academic_year_id}",
        //     'section_capacity' => 30,
        // ]);
        // } else {
        // // Mensaje de error para saber qué entidad falta
        //     if ($subjects->isEmpty()) {
        //         echo "No hay materias en la tabla 'subjects'.";
        //     }
        //     if (!$lastTerm) {
        //         echo "No hay términos en la tabla 'terms'.";
        //     }
        //     if (!$teacher) {
        //         echo "No hay profesores en la tabla 'teachers'.";
        //     }
        //     if (!$lunMieDayBlock) {
        //         echo "No hay bloques de tiempo para 'LUN-MIE' a las 07:00:00.";
        //     }
        //     if (!$emgBlock) {
        //         echo "No hay aulas en el bloque 'EMG' y aula '101'.";
        //     }
        // }

        Section::create([
            'subject_id' => 'FBTMM01',
            'section_number' => 1,
            'academic_year_id' => 2324,
            'term_id' => 3,
            'teacher_id' => 123,
            'day_block_id' => 'LUN-MIE',
            'time_block_id' => 1,
            'block_id' => 'EMG',
            'classroom_id' => 101,
            'section_description' => "Sección 1 de - del trimestre - del año académico -",
            'section_capacity' => 30,
        ]);
}
}
