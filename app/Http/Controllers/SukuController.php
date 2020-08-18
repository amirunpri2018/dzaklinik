<?php

namespace App\Http\Controllers;

use App\Http\Resources\Suku as ResourcesSuku;
use App\Http\Resources\SukuCollection;
use App\Suku;
use Illuminate\Http\Request;

class SukuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $suku = Suku::paginate(10);

        return new SukuCollection($suku);
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
     * @param  \App\Suku  $suku
     * @return \Illuminate\Http\Response
     */
    public function show(Suku $suku)
    {
        //
        return new ResourcesSuku($suku);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Suku  $suku
     * @return \Illuminate\Http\Response
     */
    public function edit(Suku $suku)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Suku  $suku
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Suku $suku)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Suku  $suku
     * @return \Illuminate\Http\Response
     */
    public function destroy(Suku $suku)
    {
        //
    }
}
