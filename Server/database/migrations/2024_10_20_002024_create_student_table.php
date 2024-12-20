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
        Schema::create('students', function (Blueprint $table) {
            $table->integer('user_ci');
            $table->integer('student_card_id')->unique();
            $table->date('student_enrollment_date');
            $table->timestamps();

            $table->foreign('user_ci')->references('user_ci')->on('users');
            $table->primary('user_ci');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
