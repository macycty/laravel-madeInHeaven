<?php

namespace App\Http\Requests;

use App\Models\customer;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CustProfileUpdateRequest extends FormRequest
{

    public function authorize() {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'customer_username' => [],
            'customer_first_name' => ['required', 'string', 'max:255'],
            'customer_middle_name' => [],
            'customer_last_name' => ['required', 'string', 'max:255'],
            'customer_email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(customer::class)->ignore($this->user()->id)],
            'customer_phone_number' => [],
            
        ];
    }
}

// customer_username
// customer_first_name
// customer_middle_name
// customer_last_name
// customer_email
// customer_phone_number
// profile_image