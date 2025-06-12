const express = require( "express");

const app = express();

app.get("/hello",(req,res) =>{
    const a = req.query.a;
    const b= req.query.b;
    const sum= parseInt(a)+parseInt(b);
    return res.json({
        sum,
    })
})

app.listen(3000,()=>{
    console.log("Server started");
})