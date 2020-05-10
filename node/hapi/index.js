var MongoClient = require('mongodb').MongoClient,
    Hapi = require('hapi');

var url = 'mongodb://localhost:27017/learning_mongo'

var server = new Hapi.Server();
server.connection({
    port: 8081
})

server.route([
    // Get tour list Test URI http://localhost:8081/api/tours?tourPackage=Backpack%20Cal
    {
        method: 'GET',
        path: '/api/tours',
        config: { json: { space: 2 } },
        handler: function (request, reply) {
            //console.log(request);
            var findObject = {};
            for (var key in request.query) {
                console.log(key);
                findObject[key] = request.query[key];
                console.log(findObject[key]);
            }
            console.log(findObject);
            collection.find(findObject).toArray(function (err, tours) {
                reply(tours);
            });
        }
    },
    // Get a single tour Test URI http://localhost:8081/api/tours/Big%20Sur%20Retreat
    {
        method: 'GET',
        path: '/api/tours/{name}',
        handler: function (request, reply) {
            collection.findOne({ "tourName": request.params.name }, function (err, tour) {
                reply(tour);
            });
        }
    },
    // Add new tour Test URI http POST http://localhost:8081/api/tours tourName="Kerala Days" tourPackage="Fun in Sun" tourPrice=10000 tourLength=5, 
    // To check whether it is inserted http "http://localhost:8081/api/tours/Kerala Days"
    {
        method: 'POST',
        path: '/api/tours',
        handler: function (request, reply) {
            collection.insertOne(request.payload, function (err, result) {
                reply(result.payload);
            });
        }
    },
    // Update a single tour TEST URI http PUT "http://localhost:8081/api/tours/Kerala Days" tourBlurb="Get your tan on"
    {
        method: 'PUT',
        path: '/api/tours/{name}',
        handler: function (request, reply) {
            // request.payload variables
            collection.updateOne({ tourName: request.params.name },
                { $set: request.payload }, function (err, results) {
                    collection.findOne({ tourName: request.params.name }, function (err, results) {
                        reply(results);
                    })
                });
        }
    },
    // Delete a single tour
    {
        method: 'DELETE',
        path: '/api/tours/{name}',
        handler: function (request, reply) {
            reply("Deleting " + request.params.name).code(204);
        }
    },
    // Home page
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply("Hello world from Hapi/Mongo example.")
        }
    }
])

MongoClient.connect(url, function (err, db) {
    console.log("connected correctly to server");
    collection = db.collection('tours');
    server.start(function (err) {
        console.log('Hapi is listening to http://localhost:8081')
    })
})