<?php

namespace Database\Seeders;

use App\Models\Subject;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // I Trimestre
Subject::create(['subject_id' => 'FBTMM01', 'subject_description'=>'desc', 'subject_name' => 'Matemática Básica']);
Subject::create(['subject_id' => 'FBTSP03', 'subject_description'=>'desc', 'subject_name' => 'Introducción a la Ingeniería']);
Subject::create(['subject_id' => 'FBTSP04', 'subject_description'=>'desc', 'subject_name' => 'Pensamiento Computacional']);
Subject::create(['subject_id' => 'FBTEM01', 'subject_description'=>'desc', 'subject_name' => 'Competencias para Emprender']);
Subject::create(['subject_id' => 'FBTIN04', 'subject_description'=>'desc', 'subject_name' => 'Inglés IV']);

// II Trimestre
Subject::create(['subject_id' => 'BPTMI01', 'subject_description'=>'desc', 'subject_name' => 'Matemáticas I']);
Subject::create(['subject_id' => 'FBTHE05', 'subject_description'=>'desc', 'subject_name' => 'Investigación y Sustentabilidad']);
Subject::create(['subject_id' => 'BPTPI07', 'subject_description'=>'desc', 'subject_name' => 'Diseño Asistido por Computador']);
Subject::create(['subject_id' => 'BPTQI21', 'subject_description'=>'desc', 'subject_name' => 'Química General']);
Subject::create(['subject_id' => 'FBTIN05', 'subject_description'=>'desc', 'subject_name' => 'Inglés V']);

// III Trimestre
Subject::create(['subject_id' => 'BPTMI02', 'subject_description'=>'desc', 'subject_name' => 'Matemáticas II']);
Subject::create(['subject_id' => 'BPTFI01', 'subject_description'=>'desc', 'subject_name' => 'Física I']);
Subject::create(['subject_id' => 'BPTSP05', 'subject_description'=>'desc', 'subject_name' => 'Algoritmos y Programación']);
Subject::create(['subject_id' => 'BPTQI22', 'subject_description'=>'desc', 'subject_name' => 'Laboratorio de Química General']);
Subject::create(['subject_id' => 'FBTEM02', 'subject_description'=>'desc', 'subject_name' => 'Ideas Emprendedoras']);

// IV Trimestre
Subject::create(['subject_id' => 'BPTMI03', 'subject_description'=>'desc', 'subject_name' => 'Matemáticas III']);
Subject::create(['subject_id' => 'BPTFI02', 'subject_description'=>'desc', 'subject_name' => 'Física II']);
Subject::create(['subject_id' => 'BPTSP06', 'subject_description'=>'desc', 'subject_name' => 'Estructuras de Datos']);
Subject::create(['subject_id' => 'BPTMI30', 'subject_description'=>'desc', 'subject_name' => 'Matemáticas Discretas']);
Subject::create(['subject_id' => 'FGE1', 'subject_description'=>'desc', 'subject_name' => 'Electiva 1']);

// V Trimestre
Subject::create(['subject_id' => 'BPTMI04', 'subject_description'=>'desc', 'subject_name' => 'Matemáticas IV']);
Subject::create(['subject_id' => 'BPTFI05', 'subject_description'=>'desc', 'subject_name' => 'Laboratorio de Física Aplicada']);
Subject::create(['subject_id' => 'BPTSP03', 'subject_description'=>'desc', 'subject_name' => 'Sistemas de Información']);
Subject::create(['subject_id' => 'BPTEN12', 'subject_description'=>'desc', 'subject_name' => 'Arquitectura del Computador']);
Subject::create(['subject_id' => 'BPTSP04', 'subject_description'=>'desc', 'subject_name' => 'Álgebra Lineal']);

// VI Trimestre
Subject::create(['subject_id' => 'BPTMI11', 'subject_description'=>'desc', 'subject_name' => 'Ecuaciones Diferenciales']);
Subject::create(['subject_id' => 'BPTMI06', 'subject_description'=>'desc', 'subject_name' => 'Estadística para Ingenieros I']);
Subject::create(['subject_id' => 'FPTSP01', 'subject_description'=>'desc', 'subject_name' => 'Bases de Datos I']);
Subject::create(['subject_id' => 'BPTSP07', 'subject_description'=>'desc', 'subject_name' => 'Organización del Computador']);
Subject::create(['subject_id' => 'FGE2', 'subject_description'=>'desc', 'subject_name' => 'Electiva 2']);

// VII Trimestre
Subject::create(['subject_id' => 'BPTMM91', 'subject_description'=>'desc', 'subject_name' => 'Matemáticas V']);
Subject::create(['subject_id' => 'BPTMI07', 'subject_description'=>'desc', 'subject_name' => 'Estadística para Ingenieros II']);
Subject::create(['subject_id' => 'FPTSP26', 'subject_description'=>'desc', 'subject_name' => 'Bases de Datos II']);
Subject::create(['subject_id' => 'FPTSP17', 'subject_description'=>'desc', 'subject_name' => 'Optimización I']);
Subject::create(['subject_id' => 'BPTMI31', 'subject_description'=>'desc', 'subject_name' => 'Sistemas Operativos']);

// VIII Trimestre
Subject::create(['subject_id' => 'FPTPI09', 'subject_description'=>'desc', 'subject_name' => 'Gestión de la Cadena de Suministro I']);
Subject::create(['subject_id' => 'FPTSP18', 'subject_description'=>'desc', 'subject_name' => 'Cálculo Numérico']);
Subject::create(['subject_id' => 'FPTSP19', 'subject_description'=>'desc', 'subject_name' => 'Ingeniería de Software']);
Subject::create(['subject_id' => 'FPTSP20', 'subject_description'=>'desc', 'subject_name' => 'Optimización II']);
Subject::create(['subject_id' => 'FGE3', 'subject_description'=>'desc', 'subject_name' => 'Electiva 3']);

// IX Trimestre
Subject::create(['subject_id' => 'FPTSP28', 'subject_description'=>'desc', 'subject_name' => 'Sistemas Distribuidos']);
Subject::create(['subject_id' => 'FPTSP14', 'subject_description'=>'desc', 'subject_name' => 'Modelación de Sistemas en Redes']);
Subject::create(['subject_id' => 'FPTSP22', 'subject_description'=>'desc', 'subject_name' => 'Simulación']);
Subject::create(['subject_id' => 'FPTSP15', 'subject_description'=>'desc', 'subject_name' => 'Modelos Estocásticos']);
Subject::create(['subject_id' => 'FGE4', 'subject_description'=>'desc', 'subject_name' => 'Electiva 4']);

// X Trimestre
Subject::create(['subject_id' => 'FPTEN23', 'subject_description'=>'desc', 'subject_name' => 'Sistemas de Redes']);
Subject::create(['subject_id' => 'FPTSP27', 'subject_description'=>'desc', 'subject_name' => 'Análisis de Datos']);
Subject::create(['subject_id' => 'FPTSP11B', 'subject_description'=>'desc', 'subject_name' => 'Sistemas de Apoyo']); // Código ajustado
Subject::create(['subject_id' => 'FPTSP25', 'subject_description'=>'desc', 'subject_name' => 'Taller de Trabajo de Grado']);
Subject::create(['subject_id' => 'FGE5', 'subject_description'=>'desc', 'subject_name' => 'Electiva 5']);

// XI Trimestre
Subject::create(['subject_id' => 'FPTSP21', 'subject_description'=>'desc', 'subject_name' => 'Seguridad de la Información']);
Subject::create(['subject_id' => 'FPTSP11C', 'subject_description'=>'desc', 'subject_name' => 'Gerencia de Proyectos TIC']); // Código ajustado
Subject::create(['subject_id' => 'FPTCS16', 'subject_description'=>'desc', 'subject_name' => 'Computación Emergente']);
Subject::create(['subject_id' => 'FPTEN27', 'subject_description'=>'desc', 'subject_name' => 'Introducción a la Robótica']);
Subject::create(['subject_id' => 'FGE6', 'subject_description'=>'desc', 'subject_name' => 'Electiva 6']);

// XII Trimestre
Subject::create(['subject_id' => 'FPS01', 'subject_description'=>'desc', 'subject_name' => 'Proyecto de Ingeniería']); // Código ajustado
Subject::create(['subject_id' => 'FPTSP30', 'subject_description'=>'desc', 'subject_name' => 'Ingeniería Económica']); // Código ajustado
Subject::create(['subject_id' => 'BPTSP40', 'subject_description'=>'desc', 'subject_name' => 'Ingeniería Ambiental']); // Código ajustado
Subject::create(['subject_id' => 'FPTSP07', 'subject_description'=>'desc', 'subject_name' => 'Defensa de Trabajo de Grado']);
Subject::create(['subject_id' => 'FGE7', 'subject_description'=>'desc', 'subject_name' => 'Electiva 7']);

    }
}
