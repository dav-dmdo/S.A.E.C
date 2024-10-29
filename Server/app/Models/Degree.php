<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Degree extends Model
{
    protected $fillable = [
        "school_id",
        "degree_name",
        "degree_minimun_credits"
    ];

    // Uno a Muchos (Una carrera tiene una escuela)
    public function school() {
        return $this->belongsTo(School::class);
    }

    protected function casts()
    {
        return [
            "degree_id" => 'int',
            "school_id" => 'int',
            "degree_minimun_credits" => 'int',
        ];
    }
}
