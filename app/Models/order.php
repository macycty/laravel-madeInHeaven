<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\menu;

class order extends Model
{
    use HasFactory;

    protected $with = ['orderDetails'];

    protected $guarded = [];
    // protected $fillable = [ 'uuid', 'order_id'];
 
    public function orderDetails () {
        return $this -> HasMany(order_detail::class, 'order_id', 'order_id');
    }
}
