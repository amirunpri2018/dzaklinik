<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePasienPasangansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pasien_pasangan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pasien_id');
            $table->string('nama');
            $table->string('alamat')->nullable();
            $table->string('telepon', 20)->nullable();
            $table->date('tanggal_lahir')->nullable();
            $table->string('pekerjaan')->nullable();
            $table->unsignedBigInteger('pendidikan_id')->nullable();
            $table->unsignedBigInteger('agama_id')->nullable();
            $table->unsignedBigInteger('suku_id')->nullable();
            $table->timestamps();
            $table->foreign('pasien_id')->references('id')->on('pasien');
            $table->foreign('pendidikan_id')->references('id')->on('pendidikan');
            $table->foreign('agama_id')->references('id')->on('agama');
            $table->foreign('suku_id')->references('id')->on('suku');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pasien_pasangan');
    }
}
