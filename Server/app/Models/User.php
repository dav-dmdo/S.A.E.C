<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 *
 */
class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    protected $dateFormat = 'd-m-Y';

    protected $primaryKey = 'user_id';

    protected $fillable = [
        "user_ci",
        "user_first_name",
        "user_middle_name",
        "user_first_surname",
        "user_second_surname",
        "user_email",
        "user_birthdate",
        "user_gender",
        "username",
        "password",
        "remember_token"
    ];

    protected $hidden = [
        "password",
        "remember_token",
    ];

    // Uno a uno (Un usuario es un profesor)
    public function teacher()
    {
        return $this->hasOne(Teacher::class, 'user_ci', 'user_ci');
    }

    // Uno a uno (Un usuario es un estudiante)
    public function student()
    {
        return $this->hasOne(Student::class, 'user_ci', 'user_ci');
    }

    // Muchos a muchos (Un estudiante tiene "entra" a muchas clases)
    public function classes() {
        return $this->belongsToMany(Clase::class, 'classes_users', 'user_id', 'class_id')
        ->using(ClaseUser::class)
        ->withPivot([
            'attendance_arrival',
            'attendance_departure',
            'attendance_rating'
        ])
        ->withTimestamps();
    }

    protected function casts(): array
    {
        return [
            "user_id" => 'int',
            "user_ci" => 'int',
            "created_at" => 'timestamp',
            "user_birthdate" => 'date:d-m-Y',
        ];
    }
}
