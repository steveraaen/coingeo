/*ndjson-split 'd[@graph].features' < pleiades-places-20180420.json > pleiadesq.ndjson

mongoimport -h ds259079.mlab.com:59079 -d heroku_7rt6qd22 -c pleiades -u steve -p modernWater360 --file ple.csv --type csv --headerline

mongoimport -h ds259079.mlab.com:59079 -d heroku_7rt6qd22 -c pleb -u steve -p modernWater360 --file ple.csv --type csv --headerline

ndjson-split 'd["@graph"].features' < data/places.json > places.ndjson

mongoimport -h ds259079.mlab.com:59079 -d heroku_7rt6qd22 -c pleJSON -u steve -p modernWater360 --file converted.json

ndjson-split 'd.features' < pobj.json > pobj.ndjson*/

var rgx = (^\{$\n\s{0,}"features": \[$\n^\s{0,}\{$\n^\s{0,}"geometry": \{$\n^\s{0,}"type": "[A-Z a-z]{1,30}"\,$\n^\s{0,}"coordinates": \[$\n^\s{0,}\-?[0-9]{1,2}\.[0-9]{3,10}\,$\n^\s{0,}[0-9]{1,2}\.[0-9]{3,10}$\n^\s{0,}\]$\n^\s{0,}\}\,$\n^\s{0,}"type": "Feature"\,$\n^\s{0,}"id":\s".{1,100}"\,$\n^\s{0,}"properties": \{$\n^\s{0,}"snippet": ".{1,200}",$\n^\s{0,}"link": ".{1,200}"\,$\n^\s{0,}"description": ".{0,1000}"\,$\n^\s{0,}"location_precision": ".{1,50}"\,$\n^\s{0,}"title": ".{0,100}"$\n^\s{0,}\}$\n^\s{0,}\}$\n^\s{0,}\])

geoproject 'd3.geoChamberlinRaw([0, 22], [45, 22], [22.5, -22])' < roads.json > projroadsb.json

geo2svg -w 960 -h 960 < projroads.json > projroads.svg

mongoimport -h ds259079.mlab.com:59079 -d heroku_7rt6qd22 -c roads -u steve -p modernWater360 --file shptogeoj.json