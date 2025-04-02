import express from "express";
const app = express();
const PORT = 5000;


app.use(express.json());

function middleware(req , res , next){
    console.log("u are in middleware");
    next();
}

app.get("/" , (req , res)=>{
    res.send("you hit / route");
})


app.get("/home" , middleware , (req , res)=>{
    res.send("you hit /home route");
});


app.post("/id/:id2" , middleware , (req , res)=>{
    const {name , classname} = req.body;
    const {id2} = req.params;
    const { papa } = req.query;
    res.json({
        name ,
        classname,
        id2,
        papa
    })
    
});

app.listen(PORT , ()=>{
    console.log(`app is running on ${PORT}`)
})