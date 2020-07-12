<?php

use App\Agama;
use Illuminate\Database\Seeder;

class AgamaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $agama = ['islam', 'Protestan', 'Katolik', 'Hindhu', 'Buddha', 'Kong Hu Cu', 'Kepercayaan'];

        foreach ($agama as $ag) {
            factory(Agama::class)->create([
                'nama_agama' => $ag
            ]);
        }
    }
}
