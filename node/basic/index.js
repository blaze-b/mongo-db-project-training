var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learning_mongo';

var findDocuments = function (db, callback) {
    var collections = db.collection('tours');
    collections.find().toArray(function (err, docs) {
        console.log("<---------------Printing the Tour Details--------------->");
        console.log(docs);
        callback;
    }),
    collections.find({"tourPackage":"Cycle California"}).toArray(function (err, docs) {
        console.log("<---------------Printing the tourPackage--------------->");
        console.log(docs);
        callback;
    });
    var collectionProfile = db.collection('profiles');
    collectionProfile.find().toArray(function (err, docs) {
        console.log("<---------------Printing the Profile Details--------------->");
        console.log(docs);
        callback;
    });
};

MongoClient.connect(url, function (err, db) {
    console.log("Successfully connected to server");
    findDocuments(db, function () {
        db.close();
    });

})