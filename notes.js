const fs=require('fs');
const chalk=require('chalk');

const getNotes=()=>
{
    return 'your name is Mahesh';
}

const addNote=(title,body)=>{ 
    const notes=loadNotes();
    const dupicateNotes=notes.filter((note)=>
    {
        return note.title===title;
    })

    const duplicateNote=notes.find((note)=>note.title===title)
    if(!duplicateNote)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('new note added'));
    }
    else{
        console.log(chalk.red.inverse('duplicate note'));
    }
   
    
}
const readNote=(title)=>{
 const notes=loadNotes();
 const noteToRead=notes.find((note)=>note.title===title);
 if(noteToRead){
    console.log(chalk.green.inverse(noteToRead.title));
    console.log(chalk.italic(noteToRead.body));
 }
 else{
     console.log(chalk.red.inverse('Note not found'));
 }
 
}

const removeNote=(title)=>
{
    const notes=loadNotes();
   const notesToKeep=notes.filter((note)=>{
       return note.title!==title;
   })
   if(notes.length>notesToKeep.length)
   {
    console.log(chalk.green.inverse('Note deleted'));
    saveNotes(notesToKeep);
   }
   else{
    console.log(chalk.red.inverse('Note deletion failed'));
   }
   
   
}

const listNotes=()=>
{
    console.log(chalk.inverse("Yor notes"));
    const notes=loadNotes();
    notes.forEach(element => {
        console.log(chalk.bgCyan(element.title));
    });

}
const saveNotes=(notes)=>{  
    //console.log('saving a note');
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}
const loadNotes=()=>{ 
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e)
    {
        return [];
    }
}
module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}