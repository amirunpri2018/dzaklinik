<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kelurahan extends Model
{
    //
    protected $table = "kelurahan";
    protected $fillable = ['id', 'kecamatan_id', 'nama_kecamatan'];

    public function kecamatan()
    {
        return $this->belongsTo(Kecamatan::class);
    }

    public function pasien()
    {
        return $this->hasMany(Pasien::class);
    }
}
