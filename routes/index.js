
/*
 * GET home page.
 */

exports.index = function(db) {
    return function(req, res){
        var yiking = db.get('hexagrammes_fr');

        yiking.find({}, function(err, entities) {
            res.render('index', { title: 'Express', yiking: entities });
        });
    };
};
