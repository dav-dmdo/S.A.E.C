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

    protected function casts(): array
    {
        return [
            "faculty_id" => "int",
            "school_id" => "int"
        ];
    }
}
