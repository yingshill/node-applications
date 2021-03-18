const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=1256e20d2ee38fbd9e7d895ffc24b06b&query=" + latitude + "," + longitude + "&units=f"
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to local servers!", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, "It is currently " + body.current.temperature + " degrees out. There is a " + body.current.precip + "% chance of rain.")
        }
            
    })
}

module.exports = forecast