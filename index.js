const express = require('express')
const app = express()



app.get('/' , (req,res)=>{
    return res.send('<h1>CI CD TUTORIAL ON AWS')
})

app.listen(3000 , ()=>{
    console.log("Running on 3000");
    
})