// const fs = require('fs');

// fs.appendFileSync('notes.txt', 'This file created by Amartya!!');
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

//customise yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("Removing a note");
    notes.removeNote(argv.title);
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "List notes",
  handler() {
    notes.listNotes();
  },
});

// create add command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log("Reading a note");
  },
});

yargs.parse();

// console.log(yargs.argv);
