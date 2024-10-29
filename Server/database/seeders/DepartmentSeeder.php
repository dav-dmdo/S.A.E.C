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
        $deparment->department_name = "Departamento de Matemáticas";
        $deparment->department_description = "Departamento de Matemáticas";
        $deparment->save();
    }
}
