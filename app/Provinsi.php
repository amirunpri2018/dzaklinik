<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Provinsi extends Model
{
    //
    protected $table = "provinsi";
    protected $fillable = ['id','nama_provinsi'];
}
