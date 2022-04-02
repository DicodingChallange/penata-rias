<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RangeHarga extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function usermenu_range_harga_url()
    {
        return 'range-harga';
    }
}
