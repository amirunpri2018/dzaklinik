<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreatePasienTest extends TestCase
{
    /** @test */
    public function user_can_create_pasien()
    {
        $user = factory(User::class)->create();
    }
}
