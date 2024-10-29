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
        "user_birthdate",
        "remember_token",
    ];

    public function teacher()
    {
        return $this->hasOne(Teacher::class);
    }

    public function student()
    {
        return $this->hasOne(Student::class);
    }

    protected function casts(): array
    {
        return [
            "user_id" => 'int',
            "created_at" => 'timestamp'
        ];
    }
}
