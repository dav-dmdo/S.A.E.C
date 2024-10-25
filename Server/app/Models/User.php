<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * 
 */
class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    // Permite la asignación de datos masivo: User::create($request->all())
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

    // Oculta propiedades cuando se expone el modelo
    protected $hidden = [
        "password",
        "user_birthdate",
        "remember_token",
    ];

    // Especificas los atributos del modelo
    protected function casts(): array
    {
        return [
            "user_id" => 'int',
            "created_at" => 'timestamp'
        ];
    }
}
