<?php

namespace App\Http\Controllers;

use App\Pasien;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PasienController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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

        $request->validate([
            'nik' => 'required|string|max:100',
            'nama_pasien' => 'required|string|max:255',
            'tempat_lahir' => 'required|string|max:255',
            'tanggal_lahir' => 'required|date',
            'jenis_kelamin' => 'required|in:l,p',
            'warga_negara' => 'required|in:wni,wna',
            'status_nikah_id' => 'required|exists:status_nikah,id',
            'suku_id' => 'nullable|exists:suku,id',
            'agama_id' => 'nullable|exists:agama,id',
            'provinsi_id' => 'nullable|exists:provinsi,id',
            'kota_id' => 'nullable|exists:kota,id',
            'kecamatan_id' => 'nullable|exists:kecamatan,id',
            'kelurahan_id' => 'nullable|exists:kelurahan,id',
            'pendidikan_id' => 'nullable|exists:pendidikan,id',
            'alamat' => 'nullable|string|max:255',
            'rtrw' => 'nullable|string|max:255',
            'kodepos' => 'nullable|string|max:10',
            'email' => 'nullable|email',
            'alergi' => 'nullable|string|max:255',
        ]);
        //
        $pasien = new Pasien();
        $pasien->nomor_rekam_medik = 123;
        $pasien->nik = $request->nik;
        $pasien->nama_pasien = $request->nama_pasien;
        $pasien->tempat_lahir = $request->tempat_lahir;
        $pasien->tanggal_lahir = $request->tanggal_lahir;
        $pasien->jenis_kelamin = $request->jenis_kelamin;
        $pasien->warga_negara = $request->warga_negara;
        $pasien->status_nikah_id = $request->status_nikah_id;
        $pasien->suku_id = $request->suku_id;
        $pasien->agama_id = $request->agama_id;
        $pasien->provinsi_id = $request->provinsi_id;
        $pasien->kota_id = $request->kota_id;
        $pasien->kecamatan_id = $request->kecamatan_id;
        $pasien->kelurahan_id = $request->kelurahan_id;
        $pasien->pendidikan_id = $request->pendidikan_id;
        $pasien->user_id = Auth::id();
        $pasien->alamat = $request->alamat;
        $pasien->rtrw = $request->rtrw;
        $pasien->kodepos = $request->kodepos;
        $pasien->email = $request->email;
        $pasien->alergi = $request->alergi;

        $pasien->save();

        return $pasien->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pasien  $pasien
     * @return \Illuminate\Http\Response
     */
    public function show(Pasien $pasien)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pasien  $pasien
     * @return \Illuminate\Http\Response
     */
    public function edit(Pasien $pasien)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pasien  $pasien
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pasien $pasien)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pasien  $pasien
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pasien $pasien)
    {
        //
    }
}
