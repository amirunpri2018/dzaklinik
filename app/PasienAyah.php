<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PasienAyah extends Model
{
    //
    protected $table = "pasien_ayah";

    public function pasien()
    {
        return $this->belongsTo(Pasien::class);
    }
}
