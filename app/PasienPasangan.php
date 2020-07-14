<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PasienPasangan extends Model
{
    //
    protected $table = "pasien_pasangan";

    public function pasien()
    {
        return $this->belongsTo(Pasien::class);
    }
}
