const express = require( "express");

const app = express();

const cors= require("cors");

app.use(cors());

app.get("/Add",(req,res) =>{
    const a = req.query.a;
    const b= req.query.b;
    const sum= parseInt(a)+parseInt(b);
    return res.json({
        sum,
    })
})

app.get("/Interest",(req,res)=>{
    const principal = req.query.principal;
    const rate = req.query.rate;
    const time = req.query.time;
    const Interest=(parseInt(principal)*parseInt(rate)*parseInt(time))/100;
    return res.json({
        Interest,
    })
})

app.listen(3000,()=>{
    console.log("Server started");
})