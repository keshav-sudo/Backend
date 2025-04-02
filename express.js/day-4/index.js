import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
// Middleware
app.use(cookieParser("secret"));  // Secret key se signed cookies enable karenge
app.use(express.json());          
app.use(express.urlencoded({ extended: true }));  

app.get("/" , (req , res)=>{
    res.cookie("userId" , "99" , {
        maxAge : 1000*69*60*24,
        signed: true
    })
    res.send('cookie set succeesfully');
})


app.get("/product", (req, res) => {
    console.log("Cookies:", req.cookies);  
    console.log("Signed Cookies:", req.signedCookies);
  
    if (req.signedCookies.userId && req.signedCookies.userId === "99") {
      return res.status(200).json({
        id: 1,
        name: "Item-01",
        price: "$100"
      });
    }
  
    return res.status(403).send("❌ Unauthorized! Cookie Invalid ya Missing.");
  });
  

app.listen(8000 , ()=>{
    console.log("app is listened at port")
});