<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\menu;

class order_detail extends Model
{
    use HasFactory;

    public $timestamps = false;
    
    protected $table = 'order_details';
    
    protected $guarded = [];
        
    protected $with = ['menuDetail'];
    
    protected $fillable = [
        'order_detail_id',
        'order_id',
        'menu_id',
        'amount',
        'no_of_servings',

    ];
   
    public function menuDetail () {
        return $this->hasOne(menu::class, 'menu_id','menu_id');
    }
}
