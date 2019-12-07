'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AffiliateSchema = Schema({
    identification: String,
    name: String,
    alias: String,
    address: String,
    phone: String,
    date_start: { type: Date, default: Date.now },
    img_profile: String
});

module.exports = mongoose.model('Affiliate', AffiliateSchema);