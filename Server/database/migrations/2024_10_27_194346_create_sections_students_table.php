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
        Schema::create('sections_students', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('section_id');
            $table->integer('student_id');

            $table->enum('status', ['Approved', 'Failed', 'Canceled', 'In Progress'])->default('In Progress');
            $table->timestamps();

            $table->foreign('section_id')->references('id')->on('sections');
            $table->foreign('student_id')->references('user_ci')->on('students');

            $table->unique(['section_id', 'student_id'], 'unique_registration_combination');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sections_students');
    }
};
