<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * Importante:
 * 
 * Leer el doc del atributo $fillable para tomar en cuenta algunas
 * función extras que agregar.
 * 
 * NOTA:
 * 
 * Conocer la propiedad de $hidden
 * 
 */
class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     * Permite la asignación de datos masivo: User::create($request->all())
     * 
     * Hashear la contraseña en el controlador
     * Asignar la fecha de creación mediante el helper now() en la ruta API
     * 
     * @var array<int, string>
     */
    protected $fillable = [
        "user_first_name",
        "user_middle_name",
        "user_first_surname",
        "user_second_surname",
        "user_email",
        "user_birthdate",
        "user_gender",
        "username"
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    // protected $hidden = [
    //     'password',
    //     'remember_token',
    // ];

    /**
     * Get the attributes that should be cast.
     * Obtienes los atributos del modelo
     * 
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            "user_id" => 'string',
            "user_first_name" => 'string',
            "user_middle_name" => 'string',
            "user_first_surname" => 'string',
            "user_second_surname" => 'string',
            "user_email" => 'string',
            "user_birthdate" => 'string',
            "user_gender" => 'string',
            "created_at" => 'timestamp'
        ];
    }
}
