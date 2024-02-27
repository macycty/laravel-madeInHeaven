<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class menu extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'menus';

    protected $fillable = [
        'menu_id',
        'menu_name',
        'price',
        'menu_type_id',
        'menu_image',
        'ingredients',
        'menu_status',
        'updated_at',  
    ];

}
