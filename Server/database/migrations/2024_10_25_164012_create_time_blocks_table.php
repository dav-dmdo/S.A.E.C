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
        Schema::create('time_blocks', function (Blueprint $table) {
            $table->id();                                       // 1, 2, 3, ..., n
            $table->string('day_block_id');                     // LUN-MIE
            $table->integer('time_block_id');                   // 1, 2, ..., 7
            $table->time('time_block_start_time');
            $table->time('time_block_finish_time');

            $table->foreign('day_block_id')->references('day_block_id')->on('day_blocks');
            $table->unique(['day_block_id', 'time_block_id'], 'unique_time_block_combination');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('time_blocks');
    }
};
