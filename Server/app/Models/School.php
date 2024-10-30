<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;

    protected $fillable = [
        "faculty_id",
        "school_name",
        "school_description"
    ];

    protected $hidden = [];

    // Uno a Muchos (Una escuela tiene una facultad)
    public function faculty() {
        return $this->belongsTo(Faculty::class);
    }

    // Uno a Muchos (Una Escuela tiene muchos departamentos)
    public function departments() {
        return $this->hasMany(Department::class);
    }

    // Uno a Muchos (Una escuela tiene muchas carreras)
    public function degrees() {
        return $this->hasMany(Degree::class);
    }

    protected function casts(): array
    {
        return [
            "faculty_id" => "int",
        ];
    }
}
