<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Portofolio;

class PortofolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Portofolio::create([
            'user_id' => 2,
            'pengalaman' => 'Wedding Decoration',
            'kemampuan' => 'Penata Rias Pengantin dan Decorasi Pernikahan',
            'aktivitas_sekarang' => 'Penata Rias',
        ]);
    }
}
