<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pasien extends Model
{
    //
    protected $table = "pasien";

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class);
    }

    public function kota()
    {
        return $this->belongsTo(Kota::class);
    }

    public function kecamatan()
    {
        return $this->belongsTo(Kecamatan::class);
    }

    public function kelurahan()
    {
        return $this->belongsTo(Kelurahan::class);
    }

    public function statusNikah()
    {
        return $this->belongsTo(StatusNikah::class);
    }

    public function suku()
    {
        return $this->belongsTo(Suku::class);
    }

    public function agama()
    {
        return $this->belongsTo(Agama::class);
    }

    public function pendidikan()
    {
        return $this->belongsTo(Pendidikan::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function ayah()
    {
        return $this->hasOne(PasienAyah::class);
    }

    public function ibu()
    {
        return $this->hasOne(PasienIbu::class);
    }

    public function pasangan()
    {
        return $this->hasOne(PasienPasangan::class);
    }
}
