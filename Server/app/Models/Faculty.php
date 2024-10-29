<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    use HasFactory;

    protected $fillable = [
        "faculty_name",
        "faculty_description"
    ];

    protected $hidden = [];

    protected function casts(): array
    {
        return [
            "faculty_id" => "int"
        ];
    }
}
