<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicYear extends Model
{

    // protected $primaryKey = 'id'; -> no es necesario porque por defecto entiende que la columna id es PK
    use HasFactory;

    protected $dateFormat = 'd-m-Y';

    protected $fillable = [
        'academic_year_id',
        'academic_year_start_date',
        'academic_year_end_date',
        'academic_year_description'
    ];

    // Uno a Muchos (Un año académico tiene varios trimestres)
    public function terms()
    {
        return $this->hasMany(Term::class, 'academic_year_id', 'academic_year_id');
    }

    // Uno a muchos (Un año acadmémico pertenece a varios trimestres)
    public function sections() {
        return $this->hasMany(Section::class, 'academic_year_id', 'academic_year_id');
    }

    protected function casts()
    {
        return [
            'academic_year_id' => 'int',
            'academic_year_start_date' => 'date:d-m-Y',
            'academic_year_end_date' => 'date:d-m-Y',
            'academic_year_description' => 'string'
        ];
    }
}
