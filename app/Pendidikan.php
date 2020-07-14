<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pendidikan extends Model
{
    //
    protected $table = "pendidikan";

    public function pasien()
    {
        return $this->hasMany(Pasien::class);
    }
}
