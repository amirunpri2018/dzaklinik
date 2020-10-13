<?php

namespace Tests\Feature;

use App\Kecamatan;
use App\Kelurahan;
use App\Kota;
use App\Pasien;
use App\PasienAyah;
use App\PasienIbu;
use App\PasienPasangan;
use App\Provinsi;
use App\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PasienTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function belongsto_pasien()
    {
        $pasien = factory(Pasien::class)->create();
        $pasienId = ['pasien_id' => $pasien->id];
        $pasienAyah = factory(PasienAyah::class)->create($pasienId);
        $pasienIbu = factory(PasienIbu::class)->create($pasienId);
        $pasienPasangan = factory(PasienPasangan::class)->create($pasienId);

        $this->assertTrue($pasien->provinsi instanceof Provinsi);
        $this->assertTrue($pasien->kota instanceof Kota);
        $this->assertTrue($pasien->kecamatan instanceof Kecamatan);
        $this->assertTrue($pasien->kelurahan instanceof Kelurahan);
        $this->assertTrue($pasien->ayah instanceof $pasienAyah);
        $this->assertTrue($pasien->ibu instanceof $pasienIbu);
        $this->assertTrue($pasien->pasangan instanceof $pasienPasangan);
    }

    /** @test */
    public function guest_cant_create_pasien()
    {
        $pasien = factory(Pasien::class)->raw();

        $result = $this->post(route('pasien.store'), $pasien);

        $result->assertStatus(302);
    }

    /** @test */
    public function validate_required_field()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);

        $pasien = factory(Pasien::class)->raw([
            'user_id' => $user->id,
            'nik' => '',
            'nama_pasien' => '',
            'tempat_lahir' => '',
            'tanggal_lahir' => '',
            'jenis_kelamin' => '',
            'warga_negara' => '',
            'status_nikah_id' => '',
        ]);

        $result = $this->post(route('pasien.store'), $pasien);

        $result->assertSessionHasErrors([
            'nik',
            'nama_pasien',
            'tempat_lahir',
            'tanggal_lahir',
            'jenis_kelamin',
            'warga_negara',
            'status_nikah_id',
        ]);
    }

    /** @test */
    public function validate_nullable_field()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);

        $pasien = factory(Pasien::class)->raw([
            'user_id' => $user->id,
            'email' => '',
            'suku_id' => '',
            'agama_id' => '',
            'provinsi_id' => '',
            'kota_id' => '',
            'kecamatan_id' => '',
            'kelurahan_id' => '',
            'pendidikan_id' => '',
            'alamat' => '',
            'rtrw' => '',
            'kodepos' => '',
            'alergi' => '',
        ]);

        $result = $this->post(route('pasien.store'), $pasien);

        $result->assertStatus(201);
    }

    /** @test */
    public function validate_tanggal_lahir_is_date_field()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);

        $pasien = factory(Pasien::class)->raw([
            'user_id' => $user->id,
            'tanggal_lahir' => 'asdsdf',
        ]);

        $result = $this->post(route('pasien.store'), $pasien);

        $result->assertSessionHasErrors([
            'tanggal_lahir',
        ]);
    }

    /** @test */
    public function validate_jenis_kelamin_field()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);

        $pasien = factory(Pasien::class)->raw([
            'user_id' => $user->id,
            'jenis_kelamin' => 'a',
        ]);

        $result = $this->post(route('pasien.store'), $pasien);

        $result->assertSessionHasErrors([
            'jenis_kelamin',
        ]);
    }

    /** @test */
    public function validate_warga_negara_field()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);

        $pasien = factory(Pasien::class)->raw([
            'user_id' => $user->id,
            'warga_negara' => 'abc',
        ]);

        $result = $this->post(route('pasien.store'), $pasien);

        $result->assertSessionHasErrors([
            'warga_negara',
        ]);
    }

    /** @test */
    public function validate_status_nikah_field()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);

        $pasien = factory(Pasien::class)->raw([
            'user_id' => $user->id,
            'status_nikah_id' => 100000000000,
        ]);

        $result = $this->post(route('pasien.store'), $pasien);

        $result->assertSessionHasErrors([
            'status_nikah_id',
        ]);
    }

    /** @test */
    public function validate_email_field()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);

        $pasien = factory(Pasien::class)->raw([
            'user_id' => $user->id,
            'email' => 100000000000,
        ]);

        $result = $this->post(route('pasien.store'), $pasien);

        $result->assertSessionHasErrors([
            'email',
        ]);
    }

    /** @test */
    public function validate_exists_relationship_field()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);

        $pasien = factory(Pasien::class)->raw([
            'user_id' => $user->id,
            'suku_id' => 100000000000,
            'agama_id' => 100000000000,
            'provinsi_id' => 100000000000,
            'kota_id' => 100000000000,
            'kecamatan_id' => 100000000000,
            'kelurahan_id' => 100000000000,
            'pendidikan_id' => 100000000000,
        ]);

        $result = $this->post(route('pasien.store'), $pasien);

        $result->assertSessionHasErrors([
            'suku_id',
            'agama_id',
            'provinsi_id',
            'kota_id',
            'kecamatan_id',
            'kelurahan_id',
            'pendidikan_id',
        ]);
    }

    /** @test */
    public function user_can_create_pasien()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);

        $pasien = factory(Pasien::class)->raw(['user_id' => $user->id]);

        $result = $this->postJson(route('pasien.store'), $pasien);

        $result->assertStatus(201);

        $this->assertDatabaseHas('pasien', $pasien);
    }

    /** @test */
    public function it_return_json_response()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user);

        $pasien = factory(Pasien::class)->make(['user_id' => $user->id]);

        $result = $this->postJson(route('pasien.store'), $pasien->toArray());

        $result->assertStatus(201)->assertJsonFragment([
            'nik' => $pasien->nik,
            'nama_pasien' => $pasien->nama_pasien,
            'tempat_lahir' => $pasien->tempat_lahir,
            'tanggal_lahir' => $pasien->tanggal_lahir,
        ]);
    }
}
