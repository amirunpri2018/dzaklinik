<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StatusNikah extends Model
{
    //
    protected $table = "status_nikah";

    public function pasien()
    {
        return $this->hasMany(Pasien::class);
    }
}
