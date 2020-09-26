<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes([
  'register' => false, // Registration Routes...
  'reset' => false, // Password Reset Routes...
  'verify' => false, // Email Verification Routes...
]);

Route::get('/', function () {
  return view('welcome');
});


Route::group(['middleware' => ['auth']], function () {

  Route::resource('pasien', 'PasienController');
  Route::get('/home', 'HomeController@index')->name('home');
  Route::resource('/agama', 'AgamaController');
  Route::resource('/provinsi', 'ProvinsiController');
  Route::get('/provinsi/{provinsi}/kota', 'ProvinsiController@kota')->name('provinsi.kota');
  Route::resource('/kota', 'KotaController')->parameters([
    'kota' => 'kota'
  ]);
  Route::get('/kota/{kota}/kecamatan', 'KecamatanController@kecamatan')->name('kota.kecamatan');
  Route::resource('/kecamatan', 'KecamatanController');
  Route::resource('/kelurahan', 'KelurahanController');
  Route::get('/kecamatan/{kecamatan}/kelurahan', 'KecamatanController@kelurahan')
    ->name('kecamatan.kelurahan');
  Route::resource('/bahasa', 'BahasaController');
  Route::resource('/pendidikan', 'PendidikanController');
  Route::resource('/statusnikah', 'StatusNikahController');
  Route::resource('/suku', 'SukuController');

  Route::get('registrasi', function () {
    return view('registrasi/index');
  })->name('registrasi');
});
