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
        $school->school_name = "Escuela de Ingeniería Civil y Escuela de Ingeniería Mecánica";
        $school->school_description = "Escuela de Ingeniería Civil y Escuela de Ingeniería Mecánica
Sara Melián, directora: smelian@unimet.edu.ve";
        $school->save();

        $school = new School();
        $school->faculty_id = 1;
        $school->school_name = "Escuela de Ingeniería de Producción y Escuela de Ingeniería Química";
        $school->school_description = "Escuela de Ingeniería de Producción y Escuela de Ingeniería Química
María Eugenia Álvarez, directora: mealvarez@unimet.edu.ve";
        $school->save();

        $school = new School();
        $school->faculty_id = 1;
        $school->school_name = "Escuela de Ingeniería Eléctrica";
        $school->school_description = "Escuela de Ingeniería Eléctrica
Aidaelena Smith, directora: asmith@unimet.edu.ve";
        $school->save();

        $school = new School();
        $school->faculty_id = 1;
        $school->school_name = "Escuela de Ingeniería de Sistemas";
        $school->school_description = "Escuela de Ingeniería de Sistemas
Teresa de Abreu, directora: tabreu@unimet.edu.ve
";
        $school->save();
    }
}
