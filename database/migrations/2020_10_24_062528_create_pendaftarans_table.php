<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePendaftaransTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pendaftaran', function (Blueprint $table) {
            $table->id();
            $table->timestamp('tanggal');
            $table->string('nomor');
            $table->string('nomor_urut');
            $table->unsignedBigInteger('pasien_id');
            $table->unsignedBigInteger('jenis_pasien_id');
            $table->unsignedBigInteger('unit_kerja_id');
            $table->unsignedBigInteger('dokter_id')->nullable();
            $table->string('nomor_peserta')->nullable();
            $table->string('nama_peserta')->nullable();
            $table->char('jenis_peserta', 1)->nullable();
            $table->timestamps();

            $table->foreign('pasien_id')->references('id')->on('pasien');
            $table->foreign('jenis_pasien_id')->references('id')->on('jenis_pasien');
            $table->foreign('unit_kerja_id')->references('id')->on('unit_kerja');
            $table->foreign('dokter_id')->references('id')->on('dokter');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pendaftaran');
    }
}
