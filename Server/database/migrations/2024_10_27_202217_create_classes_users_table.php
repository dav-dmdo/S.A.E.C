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
        Schema::create('classes_users', function (Blueprint $table) {
            $table->id();                                       // ID DE LA TABLA ATTENDANCE

            $table->unsignedBigInteger('class_id');
            $table->integer('user_id');

            $table->time('attendance_arrival')->nullable()->default(null); // Si no llega, no se registra, si llega, se registra la hora. Por defecto es null como que no ha llegado.
            $table->string('attendance_comment')->nullable()->default(null);
            $table->float('attendance_rating', 2, 1)->nullable()->default(null); // Permite valores flotantes de 1.0 a 5.0 con una precisión de un decimal. Por defecto es null como que no ha llegado.

            $table->unique(['class_id', 'user_id'], 'unique_attendance_combination');
            $table->foreign('class_id')->references('id')->on('classes');
            $table->foreign('user_id')->references('user_ci')->on('users');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classes_users');
    }
};
