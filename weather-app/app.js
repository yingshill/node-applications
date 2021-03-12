

const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

geocode("Boston", (error, data) => {
    console.log("error", error)
    console.log("data", data)
})

forecast(34.0522, -118.243683, (error, data) => {
    console.log("error", error)
    console.log("data", data)
})