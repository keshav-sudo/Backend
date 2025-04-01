const fs = require("fs");

                                //Write

// Sync 
fs.writeFileSync("./text.txt", "hey world there is sync writing");

// Async
fs.writeFile("./test.txt", "hello world I am async code", (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("Async file write successful!");
    }
});
        

                                             //Read

// Sync 
const res = fs.readFileSync("./test.txt", "utf-8");
console.log(res);

// Async
fs.readFile("./text.txt" , "utf-8" , (error , data) => {
    if(error){
        console.log("Error reading file:", error);
    }
    else{
        console.log("Async Read Output:", data);
    }
});


                                               //Update

// Sync
fs.appendFileSync("./text.txt" , ` ${new Date().toDateString()}`);

// Async
fs.appendFile("./log.txt" , `hello world this is keshav and logging in at ${new Date().toDateString()}\n` , (err) => {
    if(err){
        console.log("Error appending file:", err);
    }
    else{
        console.log("Async append successful!");
    }
});


                                                //Delete

//sync
 try {
    fs.unlinkSync("./text.txt");
    console.log("sync delet succesfuly");
 } catch (error) {
    console.log("error deleting file (sync) : "  , error)
 }

 //Async

 fs.unlink("./test.txt" , (err) =>{
    if(err){
        console.log("error deleting file (async):" , err);

    } else{
        console.log("Async delete succesfully");
    }
 })