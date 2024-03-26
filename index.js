require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('hellow world!')
})

app.get('/twitter',(req,res)=>{
    res.send("twitter url")
})
app.get('/login',(req,res)=>{
    res.send("<h1>testing</h1>")
})
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listen on port ${port}`)
})
