<?php

use App\Provinsi;
use Illuminate\Database\Seeder;

class ProvinsiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $provinsi = [
            [
                "id" => "1",
                "nama_provinsi" => "ACEH"
            ],
            [
                "id" => "12920",
                "nama_provinsi" => "SUMATERA BARAT"
            ],
            [
                "id" => "14086",
                "nama_provinsi" => "RIAU"
            ],
            [
                "id" => "15885",
                "nama_provinsi" => "JAMBI"
            ],
            [
                "id" => "17404",
                "nama_provinsi" => "SUMATERA SELATAN"
            ],
            [
                "id" => "20802",
                "nama_provinsi" => "BENGKULU"
            ],
            [
                "id" => "22328",
                "nama_provinsi" => "LAMPUNG"
            ],
            [
                "id" => "24993",
                "nama_provinsi" => "KEPULAUAN BANGKA BELITUNG"
            ],
            [
                "id" => "25405",
                "nama_provinsi" => "KEPULAUAN RIAU"
            ],
            [
                "id" => "25823",
                "nama_provinsi" => "DKI JAKARTA"
            ],
            [
                "id" => "26141",
                "nama_provinsi" => "JAWA BARAT"
            ],
            [
                "id" => "32676",
                "nama_provinsi" => "JAWA TENGAH"
            ],
            [
                "id" => "41863",
                "nama_provinsi" => "DAERAH ISTIMEWA YOGYAKARTA"
            ],
            [
                "id" => "42385",
                "nama_provinsi" => "JAWA TIMUR"
            ],
            [
                "id" => "51578",
                "nama_provinsi" => "BANTEN"
            ],
            [
                "id" => "53241",
                "nama_provinsi" => "BALI"
            ],
            [
                "id" => "54020",
                "nama_provinsi" => "NUSA TENGGARA BARAT"
            ],
            [
                "id" => "55065",
                "nama_provinsi" => "NUSA TENGGARA TIMUR"
            ],
            [
                "id" => "58285",
                "nama_provinsi" => "KALIMANTAN BARAT"
            ],
            [
                "id" => "60371",
                "nama_provinsi" => "KALIMANTAN TENGAH"
            ],
            [
                "id" => "61965",
                "nama_provinsi" => "KALIMANTAN SELATAN"
            ],
            [
                "id" => "64111",
                "nama_provinsi" => "KALIMANTAN TIMUR"
            ],
            [
                "id" => "65702",
                "nama_provinsi" => "SULAWESI UTARA"
            ],
            [
                "id" => "6728",
                "nama_provinsi" => "SUMATERA UTARA"
            ],
            [
                "id" => "67393",
                "nama_provinsi" => "SULAWESI TENGAH"
            ],
            [
                "id" => "69268",
                "nama_provinsi" => "SULAWESI SELATAN"
            ],
            [
                "id" => "72551",
                "nama_provinsi" => "SULAWESI TENGGARA"
            ],
            [
                "id" => "74716",
                "nama_provinsi" => "GORONTALO"
            ],
            [
                "id" => "75425",
                "nama_provinsi" => "SULAWESI BARAT"
            ],
            [
                "id" => "76096",
                "nama_provinsi" => "MALUKU"
            ],
            [
                "id" => "77085",
                "nama_provinsi" => "MALUKU UTARA"
            ],
            [
                "id" => "78203",
                "nama_provinsi" => "PAPUA"
            ],
            [
                "id" => "81877",
                "nama_provinsi" => "PAPUA BARAT"
            ]
        ];
        
        Provinsi::insert($provinsi);
    }
}
