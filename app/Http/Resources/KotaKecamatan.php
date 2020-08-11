<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class KotaKecamatan extends JsonResource
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
            'kota' => $this->nama_kota,
            'kecamatan' => Kecamatan::collection($this->kecamatan),
        ];
    }
}
