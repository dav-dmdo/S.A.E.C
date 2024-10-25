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
        Schema::create('day_blocks', function (Blueprint $table) {
            $table->id();
            $table->integer('day_block_id')->unique();
            $table->string('day_block_day_1');
            $table->string('day_block_day_2')->nullable();
            $table->string('day_block_number_of_days');

            $table->unique(['day_block_day_1', 'day_block_day_2'], 'unique_day_block_combination');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('day_blocks');
    }
};
