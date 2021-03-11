const request = require("request")

/* const request = require("request")

const url = "http://api.weatherstack.com/current?access_key=1256e20d2ee38fbd9e7d895ffc24b06b&query=37.8267,-122.4233&units=f"

request({ url: url, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to get network.")
    } else if (response.body.error) {
        console.log("Unable to find location")
    } else {
        const current = response.body.current
        console.log(`${current.temperature} ${current.precip}`)
    }
    
})
 */
const forecast = (longitude, latitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=1256e20d2ee38fbd9e7d895ffc24b06b&query=" + longitude + "," + latitude + "&units=f"
    request({url:url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to local servers!", undefined)
        } else if (response.body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + " It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + "% chance of rain.")
        }
            
    })
}

module.exports = forecast