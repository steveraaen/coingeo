var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var graawSchema = new Schema({
	  type: String,
	  geometry: {
        type: {type: String},
        coordinates: {type: [Number], sparse: true}
    },
    properties: {
       name: String,
	    modernName: String,
	    auth_anc: String,
	    auth_mod: String,
	    country: String,
	    am: String,
	    pp: String,
	    re: String,
	    bw: String,
	    ou: String,
	    mo: String,
	    cn: String,
	    sl: String,
	    sh: String,
	    ph: String,
	    co: String 
}
});

var graaws = mongoose.model("graaws", graawSchema);

module.exports = graaws;


































