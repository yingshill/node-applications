const fs = require("fs")
const chalk = require("chalk")

const addNote = (title, body) => {
    const notes = loadNotes() //notes started as an empty array
    const duplicatedNote = notes.find( (note) => note.title === title)
    if (duplicatedNote) {
        console.log("Title already taken")
    } else {
        notes.push({
            title: title,
            body: body
        })
      saveNotes(notes)
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

    
}

const removeNote = (title) => {
    const notes = loadNotes() 
    let notesToKeep = notes.filter((note) => note.title !== title)
    if (notesToKeep.length === notes.length) {
        console.log(chalk.bgRed("No such note to be removed"))
    } else {
        console.log(chalk.bgGreen("Successfully remove the note!"))
        saveNotes(notesToKeep)
    }
}

const listNotes = () => {
    const notes = loadNotes() 
    console.log(chalk.inverse("Your notes"))
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note)=> note.title === title)
    if (noteToRead) {
        console.log(chalk.inverse(noteToRead.title) + "\r\n" + noteToRead.body)
    } else {
        console.log(chalk.bgred("No such note existed!"))
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}