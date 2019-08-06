const express = require('express');
const app = express();

app.use('*', (req,res,next)=>{
    res.send("Hello from node app")
})

app.listen(4000, () =>{
    console.log("we are listening on port 2000")
})