<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Provinsi extends Model
{
    //
    protected $table = "provinsi";
    protected $fillable = ['id', 'nama_provinsi'];

    public function kota()
    {
        return $this->hasMany(Kota::class);
    }

    public function pasien()
    {
        return $this->hasMany(Pasien::class);
    }
}
