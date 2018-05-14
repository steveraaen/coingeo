const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird')
const proj4 = require('proj4')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express();
const hoa = require('./gh.js')
const spots = require('./data/spots.js')
const pleFeat = require('./data/pleFeat.js')
const graa = require('./data/graaw/graawcvt.js')
const shptogeoj = require('./data/roads/roads/shptogeoj.js')
const dam = require('./damrcs.js')
const geople = require('./geoPleiades.js')
const r = require('./r.js')
const findSpot = require('./models/FindSpot.js')
const hoards = require('./models/hoards.js')
const ples = require('./models/Pleiades.js')
const graaws = require('./models/Graaw.js')
const roads = require('./models/Roads.js')
const damrcs = require('./models/Damrc.js')
const plefull = require('./models/Plefull.js')
/*const plei = JSON.Stringify(require('./data/pobj.json'))*/
// ------ Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// ------ Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

console.log(hoa)
    
console.log(JSON.stringify(r))
mongoose.connect('mongodb://steve:modernWater360@ds259079.mlab.com:59079/heroku_7rt6qd22', {
  useMongoClient: true, 
}).then(function() {
	console.log('Mongo connected via mongoose')
})
app.get('/pleline', function(req, res) {
        plefull.aggregate([{

            $geoNear: {
                query:{'geometry.type': 'LineString'/*, 'geometry.type': 'Point'*/},
                near: { 
                    type: 'Point',                  
                    coordinates: [-4.1424200, 42.2884820]      
                },

                spherical: true,
                distanceField: 'distance.dist',
                maxDistance: 1000000,
                distanceMultiplier: 0.001,
                num:3000
            } 
        }], function(error, doc) {
            if (error) {
                console.log(error);
            } else {
/*                console.log(doc.length)
                console.log(doc)*/
                res.json(doc);
            }
        });
})
app.get('/plepoint', function(req, res) {
        plefull.aggregate([{

            $geoNear: {
                query:{'geometry.type': 'Point'},
                near: { 
                    type: 'Point',                  
                    coordinates: [-4.1424200, 42.2884820] 

                },

                spherical: true,
                distanceField: 'distance.dist',
                maxDistance: 1000000,
                distanceMultiplier: 0.001,
                num:1000
            } 
        }], function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc.length)
                console.log(doc)
                res.json(doc);
            }
        });
})
app.get('/dampoly', function(req, res) {
        plefull.find({'geometry.type': 'Polygon'}, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
/*                console.log(doc.length)
                console.log(doc)*/
                res.json(doc);
            }
        }).limit(150);
})

app.get('/roads', function(req, res) {
        roads.aggregate([{
            $geoNear: {
                near: { 
                    type: 'Point',                  
                    coordinates: [-4.1424200, 42.2884820]       
                },
                spherical: true,
                distanceField: 'distance.dist',
                maxDistance: 1000000,
                distanceMultiplier: 0.001,
                num:150
            }
        }], function(error, doc) {
            if (error) {
                console.log(error);
            } else {
/*                console.log(doc.length)
                console.log(doc)*/
                res.json(doc);
            }
        });
})
app.get('/graaw', function(req, res) {
        graaws.aggregate([{
            $geoNear: {
                near: { 
                    type: 'Point',                  
                    coordinates: [-4.1424200, 42.2884820]       
                },
                spherical: true,
                distanceField: 'distance.dist',
                maxDistance: 1000000,
                distanceMultiplier: 0.001,
                num:150
            }
        }], function(error, doc) {
            if (error) {
                console.log(error);
            } else {
/*                console.log(doc.length)
                console.log(doc)*/
                res.json(doc);
            }
        });
})
app.get('/pleiades', function(req, res) {
        ples.aggregate([{
            $geoNear: {
                near: { 
                    type: 'Point',                  
                    coordinates: [-4.1424200, 42.2884820]       
                },
                spherical: true,
                distanceField: 'distance.dist',
                maxDistance: 1000000,
                distanceMultiplier: 0.001,
                num:25
            }
        }], function(error, doc) {
            if (error) {
                console.log(error);
            } else {
/*                console.log(doc.length)
                console.log(doc)*/
                res.json(doc);
            }
        });
})
app.get('/hoards', function(req, res) {
        hoards.aggregate([{
            $geoNear: {
                near: { 
                    type: 'Point',                  
                    coordinates: [-4.1424200, 42.2884820]     
                },
                spherical: true,
                distanceField: 'distance.dist',
                maxDistance: 1000000,
                distanceMultiplier: 0.001,
                num:150
            }
        }], function(error, doc) {
            if (error) {
                console.log(error);
            } else {
              /*  console.log(doc)*/
                console.log(doc.length)
                res.json(doc);
            }
        });
})
app.get('/spots', function(req, res) {
        findSpot.aggregate([{
            $geoNear: {
                near: { 
                    type: 'Point',                  
                    coordinates: [-4.1424200, 42.2884820],       
                },
                spherical: true,
                distanceField: 'distance.dist',
                maxDistance: 1000000,
                distanceMultiplier: 0.001,
                num:250
            }
        }], function(error, doc) {
            if (error) {
                console.log(error);
            } else {
/*                console.log(doc)
                console.log(doc.length)*/
                res.json(doc);
            }
        });
})
app.get('/allple', function(req, res) {
        damrcs.find({}, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
/*                console.log(doc)
                console.log(doc.length)*/
                res.json(doc);
            }
        }).limit(50)
})
/*var origProj = 'PROJCS["Europe_Lambert_Conformal_Conic",GEOGCS["GCS_European_1950",DATUM["D_European_1950",SPHEROID["International_1924",6378388.0,297.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Lambert_Conformal_Conic"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",10.0],PARAMETER["Standard_Parallel_1",43.0],PARAMETER["Standard_Parallel_2",62.0],PARAMETER["Latitude_Of_Origin",30.0],UNIT["Meter",1.0]]'
    for(let i=0;i<r.length ;i++) {
        for(let j=0; j < r[i].geometry.coordinates.length; j++) {

            r[i].geometry.coordinates[j] = proj4(origProj).inverse(r[i].geometry.coordinates[j])    
        }
    }*/
/*plefull.update( {}, { $rename: { 'feature': 'Feature' } } );*/

/*hoards.insertMany(hoa, function(err,result) {
   if (err) {
   console.log(err)
   } else {
   console.log('done')
   }
});*/
/*jq.run('.', './pleiades.json', { output: 'json' }).then(console.log)*/
const port = process.env.PORT || 5001;
app.listen(port);
console.log(`Listening on ${port}`);


