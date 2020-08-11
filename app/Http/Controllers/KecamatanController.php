<?php

namespace App\Http\Controllers;

use App\Http\Resources\Kecamatan as ResourcesKecamatan;
use App\Http\Resources\KecamatanCollection;
use App\Http\Resources\Kota as ResourcesKota;
use App\Http\Resources\KotaKecamatan;
use App\Kecamatan;
use App\Kota;
use Illuminate\Http\Request;

class KecamatanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $kecamatan = Kecamatan::paginate(10);

        return new KecamatanCollection($kecamatan);
    }

    /**
     * Display kecamatan berdasarkan kota yang di pilih
     *
     * @param  \App\Provinsi  $provinsi
     * @return \Illuminate\Http\Response
     */
    public function kecamatan(Kota $kota)
    {
        //
        return new KotaKecamatan($kota);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Kecamatan  $kecamatan
     * @return \Illuminate\Http\Response
     */
    public function show(Kecamatan $kecamatan)
    {
        //
        return new ResourcesKecamatan($kecamatan);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Kecamatan  $kecamatan
     * @return \Illuminate\Http\Response
     */
    public function edit(Kecamatan $kecamatan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Kecamatan  $kecamatan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kecamatan $kecamatan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Kecamatan  $kecamatan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kecamatan $kecamatan)
    {
        //
    }
}
