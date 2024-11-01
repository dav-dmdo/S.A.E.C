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
        $faculty->faculty_description = "Todos estos programas están estructurados en un modelo académico de carácter flexible e integral, distribuido en un lapso de cuatro (4) años (12 trimestres), considerando un promedio de cinco (5) asignaturas por trimestre. Los programas de las carreras de Ingeniería de la UNIMET, gozan de un 65% de asignaturas comunes entre ellas, lo que facilita cursar dos carreras de ingeniería en forma simultánea, con la obtención de dos títulos en cortos lapsos de tiempo adicionales, dada la afinidad y complementariedad de los programas académicos.

A esta facultad están adscritos los Departamentos de Construcción y Desarrollo Sustentable, Energía y Automatización, Producción Industrial, y Gestión de Proyectos y Sistemas. Estos departamentos tienen a su cargo los diferentes laboratorios que le prestan apoyo a las diferentes carreras de Ingeniería.

La actividad investigativa de la Facultad está dirigida a sectores claves del desarrollo tecnológico y científico, tales como las áreas de gestión de la tecnología: investigación de operaciones, métodos avanzados de toma de decisiones, alimentos, refrigeración, petróleo y gas, desarrollo de prototipos, nuevos materiales, análisis de riesgo, ambiente, diseño de productos, entre";
        $faculty->save();
    }
}
