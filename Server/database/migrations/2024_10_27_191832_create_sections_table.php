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
            $table->string('subject_id');
            $table->integer('section_number');
            $table->integer('academic_year_id');
            $table->enum('term_id', [1, 2, 3, 4]);
            $table->integer('teacher_id');
            $table->integer('day_block_id');
            $table->integer('time_block_id');
            $table->string('block_id');
            $table->integer('classroom_id');
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
