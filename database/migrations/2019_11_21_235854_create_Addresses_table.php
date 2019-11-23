<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddresesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->nullable();
            $table->foreign('user_id')->reference('id')->on('users')->onDelete('cascade');
            $table->string('billing_address');
            $table->string('shipping_address');
            $table->string('province_id')->nullable();
            $table->foreign('province_id')->reference('id')->on('provinces')->onDelete('cascade');
            $table->string('city_id')->nullable();
            $table->foreign('city_id')->reference('id')->on('cities')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addreses');
    }
}
