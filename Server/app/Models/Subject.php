<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable = [
        "subject_name",
        "subject_description"
    ];

    // Oculta propiedades cuando se expone el modelo
    protected $hidden = [];

    // Especificas los atributos del modelo
    protected function casts(): array
    {
        return [
            "subject_id" => "int"
        ];
    }
}
