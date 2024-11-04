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
            $table->time('attendance_departure')->nullable()->default(null);
            $table->enum('attendance_rating', [-2, -1, 0, 1, 2])->nullable()->default(null); // -2: Muy mal, -1: Mal, 0: Regular, 1: Bien, 2: Muy bien. Si no llega no calififica. Por defecto es null como que no ha llegado.

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
