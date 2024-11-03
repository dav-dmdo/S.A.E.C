<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $deparment = new Department();
        $deparment->school_id = 1;
        $deparment->department_name = "Construcción y Desarrollo Sustentable";
        $deparment->department_description = "El departamento de Construcción y Desarrollo Sustentable tiene como misión promover la formación académica y la generación y divulgación del conocimiento del desarrollo sustentable, entorno a la gestión ambiental y la construcción de ecosistemas urbanos para el mejoramiento de la calidad de vida, en concordancia con los principios que orientan la responsabilidad social.";
        $deparment->save();

        $deparment = new Department();
        $deparment->school_id = 1;
        $deparment->department_name = "Energía y Automatización";
        $deparment->department_description = "El departamento de Energía y Automatización tiene como misión contribuir en la formación de profesionales integrales del tercer y cuarto nivel, con el apoyo de profesores y profesionales dedicados a la investigación, la docencia y los servicios a terceros que permitan el desarrollo de competencias para aportar soluciones de calidad en las disciplinas de energía, gas, petróleo, automatización, control, robótica, telecomunicaciones, electrónica, alimentos en la dimensión de nuevos productos y procesos químicos proponiendo innovaciones en proyectos multidisciplinarios.";
        $deparment->save();

        $deparment = new Department();
        $deparment->school_id = 2;
        $deparment->department_name = "Producción Industrial";
        $deparment->department_description = "El departamento de Producción Industrial tiene como misión ser pilar en la formación de profesionales de excelencia al servicio de la sociedad, que contribuyan al desarrollo tecnológico y productivo del país y del mundo. Aportando a la generación de nuevas tecnologías para el servicio del sector productivo y de la sociedad. Todo esto con el fin de ser un centro de referencia para el desarrollo tecnológico del país y del mundo. Tiene a su cargo el dictado de asignaturas de pre y postgrado, así como líneas de investigación en las áreas de Mecánica de Sólidos, Diseño de Máquinas, Procesos de Manufactura, Control y Mejoramiento de Procesos productivos, Plantas Industriales, Control de Calidad, entre otras.";
        $deparment->save();

        $deparment = new Department();
        $deparment->school_id = 1;
        $deparment->department_name = "Gestión de Proyectos y Sistemas";
        $deparment->department_description = "El departamento de Gestión de Proyectos y Sistemas es una dependencia académica (y de servicios) de la Facultad de Ingeniería, que tiene como misión: Preparar a nuestros estudiantes para los retos del siglo 21 propiciando la sinergia entre los Humanos y los Sistemas de Ingeniería con el desarrollo de las competencias en las áreas del conocimiento de los sistemas y los proyectos que incorpore la comunicación, el diseño y el trabajo en equipo multidisciplinarios";
        $deparment->save();

    }
}
