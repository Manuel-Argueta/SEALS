require('dotenv').config();
const express = require('express');
const cors = require('cors');
const superagent =  require('superagent');
//Port Number
const port = process.env.PORT;

// Base url
const baseurl = process.env.BASE_URL;

//declare our server
const app = express();

//set up middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
  res.status(200).send({
    status: 200,
    message: "Express Server is OK"
  });
});

// Endpoint for API movies
app.get('/get-movies',(req,res)=>{
    const url = `${baseurl}/films`;
    superagent.get(url).end((error, resp)=>{
      if (error){
        res.status(400).send({
          status: 400,
          message: "Unable To Get Movies."
        });
      }
      res.status(200).send(resp.body);
    });

});

// Post req to get one movie through specified movie id
app.post('/get-one-movie', (req, res) =>{
  const incomingData = req.body;
  const url  = `${baseurl}/films/${incomingData.id}`;
  superagent.get(url).end((error, resp) =>{
    if (error) {
      res.status(400).send({
        status: 400,
        message: "Movie not found with this ID"
      });
    }
    res.status(200).send(resp.body);
  });
 
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});