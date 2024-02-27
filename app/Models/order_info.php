<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order_info extends Model
{
    use HasFactory;
    protected $table = 'orders';
    
    protected $guarded = [];
        
    protected $fillable = [
        'order_id',
        'customer_id',
        'created_at',
        'updated_at',
        'total_amount',
        'order_status',
        'processed_by',
    ];
   
}
