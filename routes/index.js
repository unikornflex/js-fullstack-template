
/*
 * GET home page.
 */
var mongo = require('mongodb').MongoClient;

exports.index = function(req, res){
    mongo.connect('mongodb://localhost:27017/yiking', function(err, db) {
        if (err) {
            console.log('db error : %s', err.message);
        }

        var collection = db.collection('hexagrammes_en');

        collection.find().toArray(function(err, entities) {
            if (err) {
                console.log('collection err : %s', err.message);
            }

            res.render('index', { title: 'Express', yiking: entities });
        });
    });
};
