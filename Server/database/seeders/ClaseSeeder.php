<?php

namespace Database\Seeders;

use App\Models\Section;
use App\Models\Term;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sections = Section::all();

        foreach ($sections as $section) {
            $this->generateClasses($section);
        }
    }

    public function generateClasses(Section $section)
    {
        // Recibir la fecha de comienzo del trimestre (2024-01-10) || ¿2022-04-10?
        $term_id = $section->term->term_id;
        $academic_year = $section->academyYear->academic_year_id;

        // ERROR: No se extraer la información de terms "term_start_date" por lo tanto se hace manual
        $startDate = Carbon::parse("2024-04-10")->next('Monday');

        // Extraer bloque de día asignado
        $dayblock = $section->day_block_id;

        // Verificar bloque de día asignado. Si la materia empieza un "martes" se actualizará la fecha para que tenga
        // sentido en la generación de clases
        if (str_contains($dayblock, "LUN")) {
            // $startDate = $termStartDate->next('Monday');
        } elseif (str_contains($dayblock, "MAR")) {
            $startDate = $startDate->addDays(1);
        } elseif (str_contains($dayblock, "MIE")) {
            $startDate = $startDate->addDays(2);
        } elseif (str_contains($dayblock, "JUE")) {
            $startDate = $startDate->addDays(3);
        } elseif (str_contains($dayblock, "VIE")) {
            $startDate = $startDate->addDays(4);
        }

        // Verificar si es 1 o 2 días
        if (str_contains($dayblock, "-")) {
            for ($i = 1; $i <= 12; $i++) {
                $section->classes()->create([
                    "class_number" => ($i * 2) - 1,
                    "class_date" => $startDate->format('Y-m-d'),
                    "class_is_canceled" => false,
                    "class_type" => "Class",
                    "class_topic" => ""
                ]);
                $section->classes()->create([
                    "class_number" => $i * 2,
                    "class_date" =>  $startDate->addDays(2)->format('Y-m-d'),
                    "class_is_canceled" => false,
                    "class_type" => "Class",
                    "class_topic" => ""
                ]);
                $startDate->addWeek();
            }
        } else {
            for ($i = 1; $i <= 12; $i++) {
                $section->classes()->create([
                    "class_number" => $i,
                    "class_date" => $startDate->format('Y-m-d'),
                    "class_is_canceled" => false,
                    "class_type" => "Class",
                    "class_topic" => ""
                ]);

                $startDate->addWeek();
            }
        }
    }
}
