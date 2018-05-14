var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var damrcSchema = new Schema({
    authors: String,
    bbox: String,
    connectsWith: String,
    created: String,
    creators: String,
    currentVersion: String,
    description: String,
    extent: Object,
    featureTypes: String,
    geoContext: String,
    hasConnectionsWith: String,
    id: Number,
    locationPrecision: String,
    maxDate: Number,
    minDate: Number,
    modified: String,
    path: String,
    reprLat: Number,
    reprLatLong: String,
    reprLong: Number,
    tags: String,
    timePeriods: String,
    timePeriodsKeys: String,
    timePeriodsRange: String,
    title: String,
    uid: String
});

var damrc = mongoose.model("damrc", damrcSchema);

module.exports = damrc;