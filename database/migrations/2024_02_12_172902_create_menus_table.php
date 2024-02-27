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
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->integer('menu_id')->unsigned();
            $table->string('menu_name', 100);
            $table->float('price');
            $table->integer('menu_type_id')->unsigned()->nullable();
            $table->binary('menu_image')->nullable();
            $table->string('ingredients', 500);
            $table->string('menu_status', 30);
            $table->timestamps();
        });
        DB::statement("ALTER TABLE menus MODIFY COLUMN menu_image LONGBLOB");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
