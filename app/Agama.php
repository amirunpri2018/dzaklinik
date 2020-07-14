<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agama extends Model
{
    //
    protected $table = "agama";

    public function pasien()
    {
        return $this->hasMany(Pasien::class);
    }
}
