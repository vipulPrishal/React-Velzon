<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lead_data', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('alt_phone')->nullable();
            $table->text('address_line1')->nullable();
            $table->text('address_line2')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('country')->nullable();
            $table->enum('gender', ['male', 'female', 'other'])->nullable();
            $table->date('join_date')->nullable();
            $table->string('lead_source')->nullable();
            $table->string('assigned_to')->nullable();
            $table->string('list_id')->nullable();
            $table->boolean('tcpa_consent')->default(false);
            $table->string('jornaya_lead_id')->nullable();
            $table->string('custom_1')->nullable();
            $table->string('custom_2')->nullable();
            $table->string('custom_3')->nullable();
            $table->string('custom_4')->nullable();
            $table->string('custom_5')->nullable();
            $table->string('custom_6')->nullable();
            $table->string('custom_7')->nullable();
            $table->string('custom_8')->nullable();
            $table->string('custom_9')->nullable();
            $table->string('custom_10')->nullable();
            $table->string('custom_11')->nullable();
            $table->string('custom_12')->nullable();
            $table->string('custom_13')->nullable();
            $table->string('custom_14')->nullable();
            $table->string('custom_15')->nullable();
            $table->boolean('dnc_flag')->default(false);
            $table->boolean('do_not_call')->default(false);
            $table->boolean('do_not_text')->default(false);
            $table->boolean('do_not_contact')->default(false);
            $table->boolean('is_valid_phone')->default(false);
            $table->boolean('is_valid_alt_phone')->default(false);
            $table->boolean('is_valid_email')->default(false);
            $table->string('phone_line_type')->nullable();
            $table->string('alt_phone_line_type')->nullable();
            $table->string('lead_image')->nullable();
            $table->integer('address_score')->nullable();
            $table->boolean('is_enriched')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lead_data');
    }
};
