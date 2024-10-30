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

    // Uno a Muchos (Una facultad tiene muchas escuelas)
    public function schools() {
        return $this->hasMany(School::class);
    }

    protected function casts(): array
    {
        return [
            "faculty_id" => "int"
        ];
    }
}
