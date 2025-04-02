import express from "express"
import dotenv from "dotenv";
import userroute from "./Routes/user.routes.js";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/v1" , userroute);

app.listen(PORT , ()=>{
    console.log(`you are using ${PORT} and your server is up`);
})





console.log(process.env.PORT);