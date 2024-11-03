<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class SectionStudent extends Pivot
{
    protected $table = 'sections_students';

    protected $dateFormat = 'd-m-Y';

    protected $fillable = [
        'section_id',
        'student_id',
        'status',
    ];

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

}
