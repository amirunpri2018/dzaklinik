<?php

namespace App\Http\Controllers;

use App\Bahasa;
use App\Http\Resources\Bahasa as ResourcesBahasa;
use App\Http\Resources\BahasaCollection;
use Illuminate\Http\Request;

class BahasaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        return new BahasaCollection(Bahasa::all());
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
     * @param  \App\Bahasa  $bahasa
     * @return \Illuminate\Http\Response
     */
    public function show(Bahasa $bahasa)
    {
        //
        return new ResourcesBahasa($bahasa);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bahasa  $bahasa
     * @return \Illuminate\Http\Response
     */
    public function edit(Bahasa $bahasa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bahasa  $bahasa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bahasa $bahasa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bahasa  $bahasa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bahasa $bahasa)
    {
        //
    }
}
