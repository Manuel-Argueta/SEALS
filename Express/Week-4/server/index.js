require('dotenv').config();
const express = require('express');

//Port Number

const port = process.env.PORT;
//declare our server

const app = express();

// Endpoint
app.get('/', (req,res) => {
    //Status codes 404, 500, 200
    res.status(200).send('Success. You reached the first end point.')
})
app.get('/hello', (req,res) => {
  res.status(200).send('Welcome to my second endpoint.');
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});