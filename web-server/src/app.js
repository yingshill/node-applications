const path = require("path")
const express = require("express")
const app = express()
const hbs = require("hbs")

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsDirectoryPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//Set up handlebars engine and views locations 
app.set("view engine", "hbs")
app.set("views", viewsDirectoryPath)
hbs.registerPartials(partialsPath)

//set up static directory t oserve
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
    res.render("index", {
        title: "weather",
        name: "Yingshi Liu"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Yingshi Liu"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        name: "Yingshi Liu",
        helpText: "Help page Info"
    })
})
app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide an address."
        })
    }
    res.send({
        forecast: "It's raining",
        location: "Philadelphia",
        address: req.query.address
    })
})

app.get("/products", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term."
        })
    }
    res.send({
        products: []
    })
})
app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "help page 404",
        name: "Yingshi Liu",
        errorMessage: " Help page not Found"
    })
})
app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Yingshi Liu",
        errorMessage: "404 Not Found"
    })
})
app.listen(3000, ()=> {
    console.log("server is up running.")
})