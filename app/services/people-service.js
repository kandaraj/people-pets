/**
 * Created by skandara on 24/08/2016.
 */
var http = require('http');
var env = require('../env/constants'); //TODO: use enviroment variable in prodcution mode

/**
 * Getlist of people from an endpoint and calls callback method to return data
 * @param callback
 */
exports.getList = function (callback) {
    var req = http.get({
        host: env.PEOPLE_URL,
        path: env.PEOPLE_ENDPOINT
    }, function(response) {
        var body = '';
        // Get the chunks and stroed in body
        response.on('data', function(d) {
            body += d;
        });

        // when stop receiving chunks, returns body as JSON and callback
        response.on('end', function() {
            // data could be corrupted or not valid JSON
            try {
                var parsed = JSON.parse(body);
                callback(null, parsed);
            }
            catch(err){
                // Throw the exception to caller to handle
                callback(err);
            }
        });
    }).on('error', function(e) {
        callback(e);
    });

    // Finally, end the request stream
    req.end();
}