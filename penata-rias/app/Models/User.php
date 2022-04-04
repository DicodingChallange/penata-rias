<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = ['id'];

    // protected $fillable = [
    //     'name',
    //     'email',
    //     'password',
    // ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function adminlte_image()
    {
        return asset('img/profil.png');
        // return asset('images/'.Auth::user()->avatar);
    }

    public function adminlte_desc()
    {
        return 'That\'s a nice person';
    }

    public function adminlte_profile_url()
    {
        return 'profile';
    }

    public function portofolio()
    {
        return $this->hasOne(Portofolio::class);
    }

}
