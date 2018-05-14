var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hoardSchema = new Schema({
   type: String,
   properties: {
       label: String,
        id: String,
        when: {
        timespans: [{
           start: String,
           end: String
       }]
    }
   },
    geometry: {
        type: {type: String, default: 'Point' },
        coordinates: {type: [Number], sparse: true}
    }   	
});

var hoards = mongoose.model("hoards", hoardSchema);

module.exports = hoards;

