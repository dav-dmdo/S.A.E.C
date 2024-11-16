<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable = [
        "subject_id",
        "subject_name",
        "subject_description"
    ];

    protected $hidden = [];

    // Muchos a Muchos (Una materia tiene "la ven" muchas carreras)
    public function degrees()
    {
        return $this->belongsToMany(Degree::class, 'degrees_subjects', 'subject_id', 'degree_id')
            ->using(DegreeSubject::class)
            ->withTimestamps();;
    }

    // Uno a muchos (Una materia tiene varias secciones)
    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    protected function casts(): array
    {
        return [
            "subject_id" => "string",
            "subject_name" => "string",
            "subject_description" => "string"
        ];
    }
}
