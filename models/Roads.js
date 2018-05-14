var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var roadSchema = new Schema({
        
            type: {type: String},
            properties: {
                OBJECTID: Number,
                CLASS: String,
                CERTAINTY: String,
                PERIOD: {type: String, required: false},
                HYPERLINK: {type: String, required: false},
                SOURCE: String,
                Shape_Leng: Number
            },
            geometry: {
                type: {type: String, default: "LineString"},
                coordinates: {type: [], sparse: true}
            }
          
        })

var roads = mongoose.model("roads", roadSchema);

module.exports = roads;