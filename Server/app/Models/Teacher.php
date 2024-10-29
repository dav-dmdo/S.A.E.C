<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_ci",
        "teacher_card_id"
    ];

    // Uno a uno (Un profesor es un user)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Uno a muchos (Un profesor tiene muchas secciones)
    public function sections() {
        return $this->hasMany(Section::class);
    }

    protected function casts()
    {
        return [
            'user_ci' => 'int',
            'teacher_card_id' => 'int'
        ];
    }
}
