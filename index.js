const express = require('express')
const port = process.env.PORT || 3000
const app = express()
// console.log(typeof(express))

app.get("/",(req,res)=>{
        res.send('Hello world')
    }

)
app.listen(port, ()=>{console.log('Listening on Port 300')})