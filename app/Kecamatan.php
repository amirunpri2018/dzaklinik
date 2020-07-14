<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kecamatan extends Model
{
    //
    protected $table = "kecamatan";
    protected $fillable = ['id', 'kota_id', 'nama_kecamatan'];

    public function kota()
    {
        return $this->belongsTo(Kota::class);
    }

    public function kelurahan()
    {
        return $this->hasMany(Kelurahan::class);
    }

    public function pasien()
    {
        return $this->hasMany(Pasien::class);
    }
}
