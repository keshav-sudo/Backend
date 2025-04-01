const EventEmitter = require("events");

const emitter = new EventEmitter()

//on(eventName , listener)
//emit(eventname , [args])


//greet()=>{console.log(:hello wrls)}


emitter.on("GREET" , ()=>{
    console.log("hello world")
})

emitter.emit("GREET");


emitter.on("GREET2" , (args)=>{
    console.log(`hello ${args.username} and the id is ${args.id}`)
})

emitter.emit( "GREET2" ,{
    username : "suraj",
    id : "1025654rsdt"
})

