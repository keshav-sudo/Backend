import express from "express";
const app = express();
const PORT = 5000;
import router from "./Router/user.routes.js";

app.use(express.json());
app.use("/api/v1" , router );


app.listen(PORT , ()=>{
    console.log(`app is running on ${PORT}`)
})