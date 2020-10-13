<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Pasien extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nomor_rekam_medik' => $this->nomor_rekam_medik,
            'nik' => $this->nik,
            'nama_pasien' => $this->nama_pasien,
            'tempat_lahir' => $this->tempat_lahir,
            'tanggal_lahir' => $this->tanggal_lahir,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
