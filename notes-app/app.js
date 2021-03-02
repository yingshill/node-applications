const chalk = require("chalk")
const { argv } = require("process")
const yargs = require("yargs")
/* const getNotes = require("./notes.js")
const result = getNodes() */
yargs.version("1.1.0")
//add, remove, read, list
yargs.command({
    command: "add",
    describe: "add new notes",
    builder: {
        title: {
            describe: "new title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "title's body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        console.log("Title: " + argv.title + "\r\n" + "Body: " + argv.body)
    }
})
yargs.command({
    command: "remove",
    describe: "remove a note",
    handler: function () {
        console.log("remove a note")
    }
})
yargs.command({
    command: "read",
    describe: "read a note",
    handler: function () {
        console.log("read a note")
    }
})
yargs.command({
    command: "list",
    describe: "list all notes",
    handler: function () {
        console.log("list all notes")
    }
})

yargs.parse()
