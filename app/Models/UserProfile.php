<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    use \Illuminate\Database\Eloquent\Factories\HasFactory;
    protected $fillable = [
        'user_id',
        'firstname',
        'lastname',
        'business_name',
        'bio',
        'address',
        'slug'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
     }
}
