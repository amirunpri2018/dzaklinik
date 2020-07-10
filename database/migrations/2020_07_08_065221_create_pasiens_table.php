<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePasiensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pasien', function (Blueprint $table) {
            $table->id();
            $table->string('nomor_rekam_medik', 20);
            $table->string('nik', 100);
            $table->string('nama_pasien');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->char('jenis_kelamin', 1);
            $table->char('warga_negara', 3);
            $table->unsignedBigInteger('status_nikah_id');
            $table->unsignedBigInteger('suku_id')->nullable();
            $table->unsignedBigInteger('agama_id')->nullable();
            $table->unsignedBigInteger('provinsi_id')->nullable();
            $table->unsignedBigInteger('kota_id')->nullable();
            $table->unsignedBigInteger('kecamatan_id')->nullable();
            $table->unsignedBigInteger('kelurahan_id')->nullable();
            $table->unsignedBigInteger('pendidikan_id')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->string('alamat')->nullable();
            $table->string('rtrw')->nullable();
            $table->string('kodepos', 10)->nullable();
            $table->string('email')->nullable();
            $table->string('alergi')->nullable();
            $table->foreign('status_nikah_id')->references('id')->on('status_nikah');
            $table->foreign('suku_id')->references('id')->on('suku');
            $table->foreign('agama_id')->references('id')->on('agama');
            $table->foreign('provinsi_id')->references('id')->on('provinsi');
            $table->foreign('kota_id')->references('id')->on('kota');
            $table->foreign('kecamatan_id')->references('id')->on('kecamatan');
            $table->foreign('kelurahan_id')->references('id')->on('kelurahan');
            $table->foreign('pendidikan_id')->references('id')->on('pendidikan');
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('pasien');
    }
}
