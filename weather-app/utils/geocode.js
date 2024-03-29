const request = require("request")

const geocode = (address, callback) => {

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoicGF1bGluYWxhdSIsImEiOiJja20zNWkzZDkxZHNnMnFwZm05eDB4MmIwIn0.nUycZ59aQi8zbgpeS1comA&limit=1"

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to local services!", undefined)
        } else if (body.features.length === 0) {
            callback("Unable to find the location!", undefined)
        } else {
            const data =  {
                longitude:body.features[0].center[0],
                latitude:body.features[0].center[1],
                location:body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode