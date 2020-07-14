<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kota extends Model
{
    //
    protected $table = "kota";

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class);
    }

    public function kecamatan()
    {
        return $this->hasMany(Kecamatan::class);
    }

    public function pasien()
    {
        return $this->hasMany(Pasien::class);
    }
}
