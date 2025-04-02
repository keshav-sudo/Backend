import { Router } from "express";
import express from "express";
import users from "../user/user.js";
const userroute = Router();


function middleware(req, res, next) {  
    const token = req.body.Authorization;  

    if (token === "1234") {
        next(); // Allow request to proceed
    } else {
        return res.status(401).json({ msg: "Corrupted" });  
    }
}


userroute.post("/:startletter" , (req , res)=>{
    const letter  = req.params.startletter.toLowerCase();
    const filteruser = users.filter(user => user.name.toLowerCase().startsWith(letter));
    res.send(filteruser);
})



export default userroute;