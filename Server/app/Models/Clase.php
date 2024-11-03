<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clase extends Model
{
    protected $table = "classes";

    protected $dateFormat = 'Y-m-d';

    protected $fillable = [
        "section_id",
        "class_number",
        "class_date",
        "class_is_canceled",
        "class_type",
        "class_topic"
    ];

    protected $hidden = [];

    // Uno a muchos (Una clase tiene una sección)
    public function section() {
        return $this->belongsTo(Section::class, 'section_id', 'id');
    }

    // Muchos a muchos (Un estudiante tiene "entra" a muchas clases)
    public function users() {
        return $this->belongsToMany(User::class);
    }

    protected function casts(): array
    {
        return [
            "section_id" => "int",
            "class_number" => "int",
            "class_date" => "date",
            "class_is_canceled" => "bool",
        ];
    }
}
