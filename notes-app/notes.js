const fs = require("fs")

const getNotes = () => {
    return "Your notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes() //notes started as an empty array
    const duplicatedNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicatedNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
      saveNotes(notes)
    } else {
        console.log("Title already taken")
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    saveNotes: saveNotes,
    loadNotes: loadNotes
}