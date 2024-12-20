<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $dateFormat = 'Y-m-d';

    protected $fillable = [
        "user_ci",
        "teacher_card_id",
        "teacher_hire_date"
    ];

    // Uno a uno (Un profesor es un user)
    public function user()
    {
        return $this->belongsTo(User::class, 'user_ci', 'user_ci');
    }

    // Uno a muchos (Un profesor tiene muchas secciones)
    public function sections() {
        return $this->hasMany(Section::class, 'teacher_id', 'user_ci');
    }

    protected function casts()
    {
        return [
            'user_ci' => 'int',
            'teacher_card_id' => 'int',
            'teacher_hire_date' => 'date:Y-m-d'
        ];
    }
}
