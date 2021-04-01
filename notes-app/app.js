const chalk = require("chalk")
const { argv } = require("process")
const yargs = require("yargs")
const { listNotes } = require("./notes.js")
const notes = require("./notes.js")
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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: "remove",
    describe: "remove a note",
    builder: {
        title: {
            describe: "title to be removed",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: "read",
    describe: "read a note",
    builder: {
        title: {
            describe: "read title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})
yargs.command({
    command: "list",
    describe: "list all notes",
    handler() {
        notes.listNotes()
    }
})

yargs.parse()
