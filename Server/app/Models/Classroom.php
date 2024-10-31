<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    protected $fillable = [
        "block_id",
        "classroom_id",
        "classroom_name",
        "classroom_description",
        "classroom_max_num_of_students"
    ];

    // Uno a Muchos (Un salón tiene "está" una bloque [A1])
    public function block() {
        return $this->belongsTo(Block::class);
    }

    // Uno a muchos (Un salón tiene "lo usan" muchas secciones)
    public function sections() {
        return $this->hasMany(Section::class);
    }

    protected function casts()
    {
        return [
            "block_id" => 'string',
            "classroom_id" => 'int',
            "classroom_max_num_of_students" => 'int'
        ];
    }
}
