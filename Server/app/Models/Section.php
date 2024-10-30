<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $fillable = [
        "subject_id",
        "section_number",
        "academic_year_id",
        "term_id",
        "teacher_id",
        "day_block_id",
        "time_block_id",
        "block_id",
        "classroom_id",
        "section_description",
        "section_capacity",
    ];

    // Uno a muchos (Una sección tiene muchas clases)
    public function classes() {
        return $this->hasMany(Clase::class);
    }

    // Muchos a muchos (Una sección tiene muchos estudiantes)
    public function students() {
        return $this->belongsToMany(Student::class);
    }

    // Uno a muchos (Una seccion tiene un profesor)
    public function teacher() {
        return $this->belongsTo(Teacher::class);
    }

    // Uno a muchos (Una seccion tiene una materia)
    public function subject() {
        return $this->belongsTo(Subject::class);
    }

    // Uno a muchos (Una sección tiene un trimestre)
    public function term() {
        // Referencia a enum('term_id', [1, 2, 3, 4])
        return $this->belongsTo(Term::class, "term_id");
    }

    // Uno a muchos (Una sección tiene un año académico)
    public function academicYear() {
        // Referencia a integer('academic_year_id')
        return $this->belongsTo(Term::class, "academic_year_id");
    }

    // Uno a muchos (Una sección tiene un bloque de tiempo)
    public function timeBlock() {
        // Referencia a integer('time_block_id')
        return $this->belongsTo(TimeBlock::class, "time_block_id");
    }

    // Uno a muchos (Una sección tiene un bloque de días)
    public function dayBlock() {
        // Referencia a string('day_block_id')
        return $this->belongsTo(TimeBlock::class, "day_block_id");
    }

    // Uno a muchos (Una sección tiene salón)
    public function classroom() {
        // Referencia a integer('classroom_id')
        return $this->belongsTo(Classroom::class, "classroom_id");
    }

    // Uno a muchos (Una sección tiene ...)
    public function block() {
        // Referencia a string('block_id')
        return $this->belongsTo(Classroom::class, "block_id");
    }

    protected function casts()
    {
        return [
            "subject_id" => "int",
            "section_number" => "int",
            "academic_year_id" => "int",
            "term_id" => "int",
            "teacher_id" => "int",
            "time_block_id" => "int",
            "classroom_id" => "int",
            "section_capacity" => "int",
        ];
    }
}
