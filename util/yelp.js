var request = require('request');
var rootURL = 'https://api.yelp.com/v3/businesses/search';

function findCostco(req, res, next) {
    var options = {
        url: `${rootURL}?term=costco&location=${req.body.zipCode}&limit=3`,
        headers: {
            'Authorization': `Bearer ${process.env.YELP_TOKEN}`
        }
    };
    return new Promise(function(resolve, reject) {
        request(options, function(err, response, body) {
            var costcoData = JSON.parse(body);
            // console.log(body);
            resolve(body);
    })
})}

module.exports = {
    findCostco
}