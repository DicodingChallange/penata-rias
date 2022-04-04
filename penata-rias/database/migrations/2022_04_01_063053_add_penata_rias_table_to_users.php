<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPenataRiasTableToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('nama_pemilik')->nullable();
            $table->string('alamat')->nullable();
            $table->string('whatsapp')->nullable();
            $table->string('sosial_media')->nullable();
            $table->string('foto_profil')->nullable();
            $table->string('tempat_kerja')->nullable();
            $table->string('status')->nullable();
            $table->string('profil_bio')->nullable();
            $table->string('role')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            // Schema::dropIfExists('users');
        });
    }
}
