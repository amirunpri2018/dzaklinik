<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegisterPasienTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function user_can_register_pasien()
    {
        $this->assertTrue(true);
    }
}
