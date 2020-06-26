
const validator=require('validator');
const chalk=require('chalk');
const yargs=require('yargs');
const notes=require('./notes.js');

//create a new note

yargs.command({
    command:'add',
    describe:'add a new note',
    buider:{
        title:{
            describe:'Note title ',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {
        // console.log('Title :'+argv.title);
        // console.log('Body : '+argv.body);
        notes.addNote(argv.title,argv.body);
    }
})


//create remove command

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
      title:{
        describe:'Note title ',
        demandOption:true,
        type:'string'
      }
    },
    handler(argv)
    {
       notes.removeNote(argv.title);
    }
})

//create a list command

yargs.command({
    command:'list',
    describe:'list the total notes',
    handler()
    {
        notes.listNotes();
    }
})

//create a read command 

yargs.command({
    command:'read',
    describe:'read the note',
    builder:{
        title:{
            describe:'read the note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes.readNote(argv.title);
    }
})
yargs.parse();