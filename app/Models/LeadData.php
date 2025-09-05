<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LeadData extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'alt_phone',
        'address_line1',
        'address_line2',
        'city',
        'state',
        'zip_code',
        'country',
        'gender',
        'join_date',
        'lead_source',
        'assigned_to',
        'list_id',
        'tcpa_consent',
        'jornaya_lead_id',
        'custom_1',
        'custom_2',
        'custom_3',
        'custom_4',
        'custom_5',
        'custom_6',
        'custom_7',
        'custom_8',
        'custom_9',
        'custom_10',
        'custom_11',
        'custom_12',
        'custom_13',
        'custom_14',
        'custom_15',
        'dnc_flag',
        'do_not_call',
        'do_not_text',
        'do_not_contact',
        'is_valid_phone',
        'is_valid_alt_phone',
        'is_valid_email',
        'phone_line_type',
        'alt_phone_line_type',
        'lead_image',
        'address_score',
        'is_enriched',
    ];

    protected $casts = [
        'join_date' => 'date',
        'tcpa_consent' => 'boolean',
        'dnc_flag' => 'boolean',
        'do_not_call' => 'boolean',
        'do_not_text' => 'boolean',
        'do_not_contact' => 'boolean',
        'is_valid_phone' => 'boolean',
        'is_valid_alt_phone' => 'boolean',
        'is_valid_email' => 'boolean',
        'is_enriched' => 'boolean',
        'address_score' => 'integer',
    ];
}
