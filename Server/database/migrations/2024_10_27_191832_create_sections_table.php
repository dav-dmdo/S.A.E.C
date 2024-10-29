<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sections', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('subject_id');       // 1, 2, 3, ..., n
            $table->integer('section_number');              // 1, 2, 3, ..., n
            $table->integer('academic_year_id');            // 2223, 2324, 2425, ...
            $table->enum('term_id', [1, 2, 3, 4]);          // 1, 2, 3, 4
            $table->integer('teacher_id');                  // 15.987.334
            $table->string('day_block_id');                 // LUN-MIE
            $table->integer('time_block_id');               // 1, 2, ..., 7
            $table->string('block_id');                     // A1, A2, EMG, SL
            $table->integer('classroom_id');                // 1, 2, 3, 4
            $table->text('section_description');            
            $table->integer('section_capacity');
            $table->timestamps();

            $table->foreign('subject_id')->references('subject_id')->on('subjects');
            $table->foreign('teacher_id')->references('user_ci')->on('teachers');
            $table->foreign(['academic_year_id', 'term_id'])->references(['academic_year_id', 'term_id'])->on('terms');
            $table->foreign(['day_block_id', 'time_block_id'])->references(['day_block_id', 'time_block_id'])->on('time_blocks');
            $table->foreign(['block_id', 'classroom_id'])->references(['block_id', 'classroom_id'])->on('classrooms');


            $table->unique(['subject_id', 'section_number', 'academic_year_id', 'term_id'], 'unique_section_combination');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sections');
    }
};
