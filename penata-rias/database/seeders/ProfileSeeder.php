<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin123'),
            'role' => 'admin'
        ]);

        User::create([
            'name' => 'Sanggar Rias Hendi & Wedding Decoration',
            'email' => 'rias_hendi@gmail.com',
            'password' => bcrypt('password'),
            'nama_pemilik' => 'Rias Hendi',
            'alamat' => 'Ds. Kertanegara Blok 1 Kec. Hargelius, Kab. Indramayu 45264',
            'whatsapp' => '082214271664',
            'sosial_media' => '-',
            'profil_bio' => '-',
            'foto_profil' => '',
            'tempat_kerja' => 'Hargelius',
            'status' => 'online',
            'role' => 'mua',
        ]);

        User::create([
            'name' => "Vin's Salon Salon Khusus Wanita dan Rias Pengantin",
            'email' => 'vins_salon@gmail.com',
            'password' => bcrypt('password'),
            'nama_pemilik' => 'Vins Salon',
            'alamat' => 'Jl. Raya Sumur Watu Pedati I - Jatimulya, Kec.Terisi Kab. Indramayu 45267',
            'whatsapp' => '082214271664',
            'sosial_media' => '-',
            'profil_bio' => '',
            // http://vinssalon.blogspot.com/
            'foto_profil' => '',
            'tempat_kerja' => 'Terisi',
            'status' => 'online',
            'role' => 'mua',
        ]);
    }
}
