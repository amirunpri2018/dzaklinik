<?php

namespace App\Http\Controllers;

use App\Http\Resources\Kota as ResourcesKota;
use App\Http\Resources\KotaCollection;
use App\Kota;
use Illuminate\Http\Request;

class KotaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $kota = Kota::paginate(10);

        return new KotaCollection($kota);
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
     * @param  \App\Kota  $kota
     * @return \Illuminate\Http\Response
     */
    public function show(Kota $kota)
    {
        //
        return new ResourcesKota($kota);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Kota  $kota
     * @return \Illuminate\Http\Response
     */
    public function edit(Kota $kota)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Kota  $kota
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kota $kota)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Kota  $kota
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kota $kota)
    {
        //
    }
}
