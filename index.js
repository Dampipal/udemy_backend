const express = require('express');

const app = express

const PORT = 3009

app.get('/',(req,res)=>{
    res.send("Welcome to Udemy Backend")
})
app.listen(PORT,()=>{
    console.log(`Server on running port ${PORT}`);
});