<?php

namespace Database\Seeders;

use App\Models\AcademicYear;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;

class AcademicYearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $academicYear = new AcademicYear();
        $academicYear->academic_year_id = 2122;
        $academicYear->academic_year_start_date = Carbon::create(2021, 9, 1)->format('d-m-y'); // Fecha: 1 de septiembre de 2021
        $academicYear->academic_year_end_date = Carbon::create(2022, 6, 30)->format('d-m-y');  // Fecha: 30 de junio de 2022
        $academicYear->academic_year_description = 'Año académico 2021-2022';
        $academicYear->save();

        $academicYear = new AcademicYear();
        $academicYear->academic_year_id = 2223;
        $academicYear->academic_year_start_date = Carbon::create(2022, 9, 1)->format('d-m-y'); // Fecha: 1 de septiembre de 2022
        $academicYear->academic_year_end_date = Carbon::create(2023, 6, 30)->format('d-m-y'); // Fecha: 30 de junio de 2023
        $academicYear->academic_year_description = 'Año académico 2022-2023';
        $academicYear->save();

        $academicYear = new AcademicYear();
        $academicYear->academic_year_id = 2324;
        $academicYear->academic_year_start_date = Carbon::create(2023, 9, 1)->format('d-m-y'); // Fecha: 1 de septiembre de 2023
        $academicYear->academic_year_end_date = Carbon::create(2024, 6, 30)->format('d-m-y'); // Fecha: 30 de junio de 2024
        $academicYear->academic_year_description = 'Año académico 2023-2024';
        $academicYear->save();


        //AcademicYear::factory()->count(10)->create();
    }
}
