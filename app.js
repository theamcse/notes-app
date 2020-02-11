const yargs=require('yargs')
const notes=require('./notes')
//3.1
// const fs=require('fs')
// fs.writeFileSync("notes.txt","My name is Akash Mishra.")
// fs.appendFileSync("notes.txt","I know it already.")


// 3.2
// const add=require('./utils')
// console.log(add(3,2))

// const getNotes=require("./notes")
// console.log(getNotes())

//3.4
// const validator=require('validator')
// email='theam.cse@gmail.com'
// console.log(validator.isEmail(email))
// console.log(validator.isLength(email,{min:0,max:100}))

// //3.5
// const chalk=require("chalk")
// var status="Error!"
// console.log(chalk.bgRed.white.bold(status))

/*
    1. builder is used for having CLI accoring to the developer
    2.handler function is used to perform the action for that particular CLI
    3. builder is a object property which also a object which poses the title object property which conataing description property
*/
//Listing notes

yargs.command({
    command: "list",
    description:"Listing all notes",
    
    handler:()=> {
        notes.listNotes()
    }
})

//Reading a note

yargs.command({
    command:"read",
    description:"Read a note",
    builder:{
        title:{
            describe:"Title of a note"
        }
    },
    handler: ()=>{
        notes.getNotes()
    }
})

//Adding a note

yargs.command({
    command:"add",
    description:"Add a note",
    builder:{
        title:{
            description:"Adding this note" ,
            demandOption:true,
            type:"string"
        },
        body:{
            description:"Body of a note",
            demandOption:true,
            type:"string"
        }
    },
    handler: (argv)=>{
        notes.addNotes(argv.title,argv.body)
    }
})

//Remove a note

yargs.command({
    command:"remove",
    description:"Remove a note",
    builder:{
        title:{
            description:"Remove the title of this note"
        }
    },
    handler:function(argv){
        notes.removeNotes(argv.title)
        
    }
})

//Update the title
yargs.command({
    command:"update",
    description:"Update a note title",
    builder:{
            title:{
                description:"Update the title"
            },
            to:{
                description:"Updated title"
            }
    },
    handler:(argv)=>{
        notes.updateNotes(argv.title,argv.to)
    }
})

yargs.parse()
