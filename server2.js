// We add the express module to the project:
const express = require('express')

//We define the express application:
const app = express()

// We use the express application we defined:
app.get('/',(req, res)=>{
    // If we are going to send a text respond and a status code:
    res.status(200).send("Request is successfully handled.")
})
app.post('/new',(req,res)=>{
    // If we are going to send a json respond and a status code:
    res.status(201).json({message: 'Request is successfully created.'})
})

// We open the port value of the express application we defined:
app.listen(4000,()=>{
    console.log('Server started listening on port 4000')
})
