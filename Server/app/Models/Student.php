<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $primaryKey = "user_ci";
    
    protected $fillable = [
        "user_ci",
        "student_card_id",
        "student_enrollment_date"
    ];

    // Uno a uno (Un estudiante es un user)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Muchos a muchos (Un estudiante tiene "se registra" en muchas secciones)
    public function sections() {
        return $this->belongsToMany(Section::class);
    }

    protected function casts()
    {
        return [
            'user_ci' => 'int',
            'student_card_id' => 'int'
        ];
    }
}
