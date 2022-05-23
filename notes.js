const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your Notes";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  // const duplicateNotes = notes.filter(function (note) {
  //   return note.title === title;
  // });
  if (duplicateNotes.length === 0) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
  }
};

const removeNote = (title) => {
  // console.log(title);
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No Note found!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse("Your Notes!"));

  notes.forEach((note) => {
    console.log("Title - ", note.title);
    console.log("Body - ", note.body);
  });
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
};
