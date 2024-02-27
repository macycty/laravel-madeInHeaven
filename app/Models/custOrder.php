<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\order_detail;

class custOrder extends Model
{
    use HasFactory;
    protected $table = 'orders';
    
    protected $guarded = [];

    protected $with = ['orderDetails'];
    
    protected $fillable = [ 'uuid', 'order_id'];
   
    public function orderDetails () {
        return $this -> HasMany(order_detail::class, 'order_id', 'order_id');
    }

    
}
