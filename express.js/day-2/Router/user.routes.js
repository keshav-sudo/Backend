import express, { Router } from "express";
const router = Router();


router.get("/" , (req , res)=>{
    res.json("you hit / route ");
})

router.post("/:name" , (req , res)=>{
    const {name} = req.params;
    res.json({
        name
    })

})

router.get("/name" ,  (req, res) =>{
    res.send("you hit the /name end point");
});


export default router;