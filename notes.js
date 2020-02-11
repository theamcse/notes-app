const fs=require('fs')
const getNotes=()=>{
    const notes=loadNotes()
    console.log("There are "+notes.length+" note.")
}


const addNotes=function(title,body){
    const notes=loadNotes()
    const duplicatenotes=notes.filter((note)=> title==note.title)

    if(duplicatenotes.length == 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("Added notes successfully")
    }
    else{
        console.log("Note title is already taken !")
    }
    

}
const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const removeNotes=(title)=>{
    const notes=loadNotes()
    const keepingnotes=notes.filter((note)=> title!=note.title)
    if(keepingnotes.length<notes.length){
        saveNotes(keepingnotes)
        console.log("Note remove successfully !")
    }else{
        console.log("Title not Found !")
    }    
}

const listNotes=()=>{
    console.log(loadNotes())
}

const updateNotes=(title,updatetitle)=>{
    const notes=loadNotes()
    for(i=0;i<notes.length;i++){
        if (notes[i].title==title){
            notes[i].title=updatetitle
            saveNotes(notes)
            console.log("Note has been Updated")
        }
    }
    
    
}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    updateNotes:updateNotes
}