<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    use HasFactory;

        // Permite la asignación de datos masivo: Faculty::create($request->all())
        protected $fillable = [
            "faculty_name",
            "faculty_description"
        ];
    
        // Oculta propiedades cuando se expone el modelo
        protected $hidden = [
        ];
    
        // Especificas los atributos del modelo
        protected function casts(): array
        {
            return [
                "faculty_id" => "int"
            ];
        }
}
