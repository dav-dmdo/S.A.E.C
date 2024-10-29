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
    public function degrees() {
        return $this->belongsToMany(Degree::class);
    }
    

    protected function casts(): array
    {
        return [
            "subject_id" => "int"
        ];
    }
}
