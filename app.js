// const fs = require('fs');

// fs.appendFileSync('notes.txt', 'This file created by Amartya!!');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

//customise yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function(){
    console.log("Adding a new note");
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  handler: function(){
    console.log("Removing a note");
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function(){
    console.log("Listing note");
  }
})

// create add command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function(){
    console.log("Reading a note");
  }
})


console.log(yargs.argv);
