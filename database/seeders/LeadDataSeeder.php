<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\LeadData;

class LeadDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Pre-defined realistic sample data
        $sampleData = [
            [
                'first_name' => 'John', 'last_name' => 'Smith', 'email' => 'john.smith@email.com',
                'phone' => '555-0101', 'alt_phone' => '555-0102', 'address_line1' => '123 Main Street',
                'address_line2' => 'Apt 4B', 'city' => 'New York', 'state' => 'NY', 'zip_code' => '10001',
                'country' => 'USA', 'gender' => 'male', 'join_date' => '2024-01-15', 'lead_source' => 'Website',
                'assigned_to' => 'Sales Rep 1', 'list_id' => 'LIST001', 'tcpa_consent' => true,
                'jornaya_lead_id' => 'JRN001', 'custom_1' => 'Premium Customer', 'custom_2' => 'High Value',
                'custom_3' => 'Tech Savvy', 'custom_4' => 'Early Adopter', 'custom_5' => 'Referral Source',
                'custom_6' => 'Social Media', 'custom_7' => 'Newsletter Subscriber', 'custom_8' => 'Mobile User',
                'custom_9' => 'Desktop User', 'custom_10' => 'Weekend Shopper', 'custom_11' => 'Bulk Buyer',
                'custom_12' => 'Seasonal Customer', 'custom_13' => 'Loyalty Member', 'custom_14' => 'VIP Status',
                'custom_15' => 'Beta Tester', 'dnc_flag' => false, 'do_not_call' => false, 'do_not_text' => false,
                'do_not_contact' => false, 'is_valid_phone' => true, 'is_valid_alt_phone' => true,
                'is_valid_email' => true, 'phone_line_type' => 'Mobile', 'alt_phone_line_type' => 'Landline',
                'lead_image' => 'profile1.jpg', 'address_score' => 95, 'is_enriched' => true
            ],
            [
                'first_name' => 'Sarah', 'last_name' => 'Johnson', 'email' => 'sarah.johnson@email.com',
                'phone' => '555-0201', 'alt_phone' => null, 'address_line1' => '456 Oak Avenue',
                'address_line2' => null, 'city' => 'Los Angeles', 'state' => 'CA', 'zip_code' => '90210',
                'country' => 'USA', 'gender' => 'female', 'join_date' => '2024-02-10', 'lead_source' => 'Social Media',
                'assigned_to' => 'Sales Rep 2', 'list_id' => 'LIST002', 'tcpa_consent' => true,
                'jornaya_lead_id' => 'JRN002', 'custom_1' => 'Standard Customer', 'custom_2' => 'Medium Value',
                'custom_3' => 'Traditional', 'custom_4' => 'Regular User', 'custom_5' => 'Direct Marketing',
                'custom_6' => 'Facebook', 'custom_7' => 'Email Subscriber', 'custom_8' => 'Mobile User',
                'custom_9' => 'Tablet User', 'custom_10' => 'Weekday Shopper', 'custom_11' => 'Single Item Buyer',
                'custom_12' => 'Year Round Customer', 'custom_13' => 'Basic Member', 'custom_14' => 'Standard Status',
                'custom_15' => 'Regular User', 'dnc_flag' => false, 'do_not_call' => true, 'do_not_text' => false,
                'do_not_contact' => false, 'is_valid_phone' => true, 'is_valid_alt_phone' => false,
                'is_valid_email' => true, 'phone_line_type' => 'Mobile', 'alt_phone_line_type' => null,
                'lead_image' => 'profile2.jpg', 'address_score' => 87, 'is_enriched' => true
            ],
            [
                'first_name' => 'Michael', 'last_name' => 'Brown', 'email' => 'michael.brown@email.com',
                'phone' => '555-0301', 'alt_phone' => '555-0302', 'address_line1' => '789 Pine Street',
                'address_line2' => 'Suite 200', 'city' => 'Chicago', 'state' => 'IL', 'zip_code' => '60601',
                'country' => 'USA', 'gender' => 'male', 'join_date' => '2024-03-05', 'lead_source' => 'Referral',
                'assigned_to' => 'Sales Rep 3', 'list_id' => 'LIST003', 'tcpa_consent' => false,
                'jornaya_lead_id' => 'JRN003', 'custom_1' => 'Enterprise Customer', 'custom_2' => 'Very High Value',
                'custom_3' => 'Innovation Leader', 'custom_4' => 'Power User', 'custom_5' => 'Partner Referral',
                'custom_6' => 'LinkedIn', 'custom_7' => 'Premium Subscriber', 'custom_8' => 'Desktop User',
                'custom_9' => 'Mobile User', 'custom_10' => 'Business Hours Shopper', 'custom_11' => 'Volume Buyer',
                'custom_12' => 'Quarterly Customer', 'custom_13' => 'Enterprise Member', 'custom_14' => 'Platinum Status',
                'custom_15' => 'Alpha Tester', 'dnc_flag' => false, 'do_not_call' => false, 'do_not_text' => true,
                'do_not_contact' => false, 'is_valid_phone' => true, 'is_valid_alt_phone' => true,
                'is_valid_email' => true, 'phone_line_type' => 'Business', 'alt_phone_line_type' => 'Mobile',
                'lead_image' => 'profile3.jpg', 'address_score' => 98, 'is_enriched' => true
            ],
            [
                'first_name' => 'Emily', 'last_name' => 'Davis', 'email' => 'emily.davis@email.com',
                'phone' => '555-0401', 'alt_phone' => null, 'address_line1' => '321 Elm Street',
                'address_line2' => null, 'city' => 'Houston', 'state' => 'TX', 'zip_code' => '77001',
                'country' => 'USA', 'gender' => 'female', 'join_date' => '2024-04-12', 'lead_source' => 'Email Campaign',
                'assigned_to' => 'Sales Rep 1', 'list_id' => 'LIST001', 'tcpa_consent' => true,
                'jornaya_lead_id' => 'JRN004', 'custom_1' => 'New Customer', 'custom_2' => 'Low Value',
                'custom_3' => 'Conservative', 'custom_4' => 'New User', 'custom_5' => 'Cold Email',
                'custom_6' => 'Instagram', 'custom_7' => 'Trial Subscriber', 'custom_8' => 'Mobile User',
                'custom_9' => null, 'custom_10' => 'Evening Shopper', 'custom_11' => 'Sample Buyer',
                'custom_12' => 'First Time Customer', 'custom_13' => 'Trial Member', 'custom_14' => 'Bronze Status',
                'custom_15' => 'New User', 'dnc_flag' => false, 'do_not_call' => false, 'do_not_text' => false,
                'do_not_contact' => false, 'is_valid_phone' => true, 'is_valid_alt_phone' => false,
                'is_valid_email' => true, 'phone_line_type' => 'Mobile', 'alt_phone_line_type' => null,
                'lead_image' => 'profile4.jpg', 'address_score' => 72, 'is_enriched' => false
            ],
            [
                'first_name' => 'David', 'last_name' => 'Wilson', 'email' => 'david.wilson@email.com',
                'phone' => '555-0501', 'alt_phone' => '555-0502', 'address_line1' => '654 Maple Drive',
                'address_line2' => 'Unit 5', 'city' => 'Phoenix', 'state' => 'AZ', 'zip_code' => '85001',
                'country' => 'USA', 'gender' => 'male', 'join_date' => '2024-05-20', 'lead_source' => 'Trade Show',
                'assigned_to' => 'Sales Rep 2', 'list_id' => 'LIST002', 'tcpa_consent' => true,
                'jornaya_lead_id' => 'JRN005', 'custom_1' => 'Professional Customer', 'custom_2' => 'High Value',
                'custom_3' => 'Tech Professional', 'custom_4' => 'Advanced User', 'custom_5' => 'Event Lead',
                'custom_6' => 'Twitter', 'custom_7' => 'Professional Subscriber', 'custom_8' => 'Desktop User',
                'custom_9' => 'Mobile User', 'custom_10' => 'Lunch Hour Shopper', 'custom_11' => 'Professional Buyer',
                'custom_12' => 'Monthly Customer', 'custom_13' => 'Professional Member', 'custom_14' => 'Gold Status',
                'custom_15' => 'Beta User', 'dnc_flag' => false, 'do_not_call' => false, 'do_not_text' => false,
                'do_not_contact' => false, 'is_valid_phone' => true, 'is_valid_alt_phone' => true,
                'is_valid_email' => true, 'phone_line_type' => 'Business', 'alt_phone_line_type' => 'Mobile',
                'lead_image' => 'profile5.jpg', 'address_score' => 91, 'is_enriched' => true
            ]
        ];

        // Insert the predefined sample data
        foreach ($sampleData as $data) {
            LeadData::create($data);
        }

        // Generate additional random records
        $firstNames = ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'William', 'Linda', 'Richard', 'Elizabeth', 'Joseph', 'Barbara', 'Thomas', 'Susan', 'Christopher', 'Jessica', 'Charles', 'Sarah', 'Daniel', 'Karen'];
        $lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];
        $cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington'];
        $states = ['NY', 'CA', 'IL', 'TX', 'AZ', 'PA', 'TX', 'CA', 'TX', 'CA', 'TX', 'FL', 'TX', 'OH', 'NC', 'CA', 'IN', 'WA', 'CO', 'DC'];
        $leadSources = ['Website', 'Social Media', 'Referral', 'Email Campaign', 'Trade Show', 'Cold Call', 'Google Ads', 'Facebook Ads', 'LinkedIn', 'YouTube', 'Podcast', 'Webinar', 'Content Marketing', 'SEO', 'PPC'];
        $genders = ['male', 'female', 'other'];
        $phoneTypes = ['Mobile', 'Landline', 'Business', 'VoIP'];
        $assignedTo = ['Sales Rep 1', 'Sales Rep 2', 'Sales Rep 3', 'Sales Rep 4', 'Sales Rep 5', 'Sales Manager', 'Account Executive', 'Business Development'];
        $listIds = ['LIST001', 'LIST002', 'LIST003', 'LIST004', 'LIST005', 'LIST006', 'LIST007', 'LIST008', 'LIST009', 'LIST010'];

        for ($i = 0; $i < 25; $i++) {
            $firstName = $firstNames[array_rand($firstNames)];
            $lastName = $lastNames[array_rand($lastNames)];
            $city = $cities[array_rand($cities)];
            $stateIndex = array_search($city, $cities);
            $state = $states[$stateIndex] ?? 'CA';

            LeadData::create([
                'first_name' => $firstName,
                'last_name' => $lastName,
                'email' => strtolower($firstName . '.' . $lastName . rand(1, 999) . '@email.com'),
                'phone' => '555-' . str_pad(rand(1000, 9999), 4, '0', STR_PAD_LEFT),
                'alt_phone' => rand(0, 1) ? '555-' . str_pad(rand(1000, 9999), 4, '0', STR_PAD_LEFT) : null,
                'address_line1' => rand(100, 9999) . ' ' . ['Main Street', 'Oak Avenue', 'Pine Street', 'Elm Street', 'Maple Drive', 'Cedar Lane', 'Birch Road', 'Spruce Way'][array_rand([0, 1, 2, 3, 4, 5, 6, 7])],
                'address_line2' => rand(0, 1) ? ['Apt ' . rand(1, 50), 'Suite ' . rand(100, 999), 'Unit ' . rand(1, 20)][array_rand([0, 1, 2])] : null,
                'city' => $city,
                'state' => $state,
                'zip_code' => str_pad(rand(10000, 99999), 5, '0', STR_PAD_LEFT),
                'country' => 'USA',
                'gender' => $genders[array_rand($genders)],
                'join_date' => date('Y-m-d', strtotime('-' . rand(1, 365) . ' days')),
                'lead_source' => $leadSources[array_rand($leadSources)],
                'assigned_to' => $assignedTo[array_rand($assignedTo)],
                'list_id' => $listIds[array_rand($listIds)],
                'tcpa_consent' => rand(0, 1),
                'jornaya_lead_id' => 'JRN' . str_pad(rand(100, 999), 3, '0', STR_PAD_LEFT),
                'custom_1' => ['Premium Customer', 'Standard Customer', 'Basic Customer', 'Enterprise Customer', 'Trial Customer'][array_rand([0, 1, 2, 3, 4])],
                'custom_2' => ['High Value', 'Medium Value', 'Low Value', 'Very High Value'][array_rand([0, 1, 2, 3])],
                'custom_3' => ['Tech Savvy', 'Traditional', 'Innovation Leader', 'Conservative'][array_rand([0, 1, 2, 3])],
                'custom_4' => ['Power User', 'Regular User', 'New User', 'Advanced User'][array_rand([0, 1, 2, 3])],
                'custom_5' => ['Direct Marketing', 'Partner Referral', 'Cold Email', 'Event Lead'][array_rand([0, 1, 2, 3])],
                'custom_6' => ['Facebook', 'LinkedIn', 'Instagram', 'Twitter', 'YouTube'][array_rand([0, 1, 2, 3, 4])],
                'custom_7' => ['Premium Subscriber', 'Email Subscriber', 'Trial Subscriber', 'Newsletter Subscriber'][array_rand([0, 1, 2, 3])],
                'custom_8' => ['Mobile User', 'Desktop User', 'Tablet User'][array_rand([0, 1, 2])],
                'custom_9' => rand(0, 1) ? ['Mobile User', 'Desktop User', 'Tablet User'][array_rand([0, 1, 2])] : null,
                'custom_10' => ['Weekend Shopper', 'Weekday Shopper', 'Evening Shopper', 'Business Hours Shopper'][array_rand([0, 1, 2, 3])],
                'custom_11' => ['Bulk Buyer', 'Single Item Buyer', 'Volume Buyer', 'Sample Buyer'][array_rand([0, 1, 2, 3])],
                'custom_12' => ['Seasonal Customer', 'Year Round Customer', 'Quarterly Customer', 'First Time Customer'][array_rand([0, 1, 2, 3])],
                'custom_13' => ['Loyalty Member', 'Basic Member', 'Enterprise Member', 'Trial Member'][array_rand([0, 1, 2, 3])],
                'custom_14' => ['VIP Status', 'Standard Status', 'Platinum Status', 'Bronze Status'][array_rand([0, 1, 2, 3])],
                'custom_15' => ['Beta Tester', 'Regular User', 'Alpha Tester', 'New User'][array_rand([0, 1, 2, 3])],
                'dnc_flag' => rand(0, 1),
                'do_not_call' => rand(0, 1),
                'do_not_text' => rand(0, 1),
                'do_not_contact' => rand(0, 1),
                'is_valid_phone' => rand(0, 1),
                'is_valid_alt_phone' => rand(0, 1),
                'is_valid_email' => rand(0, 1),
                'phone_line_type' => $phoneTypes[array_rand($phoneTypes)],
                'alt_phone_line_type' => rand(0, 1) ? $phoneTypes[array_rand($phoneTypes)] : null,
                'lead_image' => 'profile' . rand(1, 100) . '.jpg',
                'address_score' => rand(50, 100),
                'is_enriched' => rand(0, 1),
            ]);
        }
    }
}
