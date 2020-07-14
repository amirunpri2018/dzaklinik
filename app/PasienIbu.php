<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PasienIbu extends Model
{
    //
    protected $table = "pasien_ibu";

    public function pasien()
    {
        return $this->belongsTo(Pasien::class);
    }
}
