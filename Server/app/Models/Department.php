<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    // Permite la asignación de datos masivo: Department::create($request->all())
    protected $fillable = [
        "school_id",
        "faculty_id",
        "school_name",
        "school_description"
    ];

    // Oculta propiedades cuando se expone el modelo
    protected $hidden = [];

    // Especificas los atributos del modelo
    protected function casts(): array
    {
        return [
            "school_id" => "int"
        ];
    }
}
