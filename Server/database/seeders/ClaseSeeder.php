<?php

namespace Database\Seeders;

use App\Models\Section;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
        $termStartDate = Carbon::parse($section->term->term_start_date);
        $startDate = $termStartDate->next('Monday');
        switch ($section->day_block_id) {
            case 'LUN-MIE':
                $startDate = $termStartDate->isMonday() ? $termStartDate : $termStartDate->nextMonday();
                break;
            case 'MAR-JUE':
                $startDate = $termStartDate->isTuesday() ? $termStartDate : $termStartDate->nextTuesday();
                break;
            case 'MIE-VIE':
                $startDate = $termStartDate->isWednesday() ? $termStartDate : $termStartDate->nextWednesday();
                break;
            default:
                break;
        }

        for ($i = 1; $i <= 12; $i++) {

            $section->classes()->create([
                "class_number" => ($i * 2) - 1,
                "class_date" => $startDate->copy()->format('Y-m-d'),
                "class_is_canceled" => false,
                "class_type" => "Class",
                "class_topic" => "Introduction to the course"
            ]);

            $section->classes()->create([
                "class_number" => $i * 2,
                "class_date" =>  $startDate->copy()->addDays(2)->format('Y-m-d'),
                "class_is_canceled" =>false,
                "class_type" => "Class",
                "class_topic" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ]);
            $startDate->addWeek();
        }
    }
}
