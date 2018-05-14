var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var pleSchema = new Schema({
    geometry: {
    	  type: {type: String, default: 'Point' },
        coordinates: {type: [Number], sparse: true}
    },
    pl_id:  String,
    properties: {
       snippet:  String,
       link:  String,
       description:  String,
       location_precision:  String,
       title:  String
            }
});

var ples = mongoose.model("ples", pleSchema);

module.exports = ples;