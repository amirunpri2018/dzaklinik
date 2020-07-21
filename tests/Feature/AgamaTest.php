<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AgamaTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_return_json_response()
    {
        $this->get('');
    }
}
