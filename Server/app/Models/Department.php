<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        "school_id",
        "department_name",
        "department_description"
    ];

    protected $hidden = [];

    // Uno a Muchos (Un departamento tiene una escuela)
    public function school() {
        return $this->belongsTo(School::class);
    }

    protected function casts(): array
    {
        return [
            "school_id" => "int",
            "department_id" => "int"
        ];
    }
}
