
## DZAKLINIK
**DZAKLINIK** adalah aplikasi klinik yang dapat digunakan untuk manajemen klinik, seperti rekam medik, pemeriksaan poli. Sementara masih dalam tahap **development**

## System requirements

- PHP 7.2.5
- Postgresql 10
- Webserver (nginx/apache)
- NodeJS 12
- ReactJs 16

## Installation
- Install [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-maco)
- Install [Laravel](https://laravel.com/docs/7.x)
- download atau clone repo ini
- masuk ke direktori dzaklinik dan jalankan perintah `composer install`
- buat database di postgresql
- copy .env.example menjadi .env
- buka file .env dan ubah konfigurasi database :
``` DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=<nama_database>
DB_USERNAME=<username_database>
DB_PASSWORD=<password_database>
````
- Buka brower dan arahkan halaman ke aplikasi dzaklinik misal : `http://localhost/dzaklinik`
 
## Features
Dalam pengembangan

## In Progress

- [ ] CRUD Pasien di Rekam Medik
- [ ] Pendaftaran Pasien Ke Poli

## Built With
- Laravel
- React

## License
[MIT](https://opensource.org/licenses/MIT) 