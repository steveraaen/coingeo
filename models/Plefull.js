var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var plefullSchema = new Schema({
    type: String,
    properties:
        {
            authors: String,
            description: String,
            fType: String,
            geocontext: String,
            id: Number,
            maxDate: Number,
            minDate: Number,
            path: String,
            repLat: Number,
            repLng: Number,
            tags: String,
            timePeriods: String,
            timPeriodKeys: String,
            title: String
        },
        geometry:
        {
            type: {type: String},
            coordinates:[]
        }
});

var plefulls = mongoose.model("plefulls", plefullSchema);

module.exports = plefulls;