var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var findSpotSchema = new Schema({
	    geometry: {
        type: {type: String, default: 'Point' },
        coordinates: {type: [Number], sparse: true}
    },
	properties: {
		name: {type: String, required: true},
		uri: {type: String, required: true},
		type: {type: String, required: true}

	}

});

var findSpots = mongoose.model("findSpots", findSpotSchema);

module.exports = findSpots;