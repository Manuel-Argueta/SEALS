require('dotenv').config();
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
const JokeAPI = require('sv443-joke-api');

const port =  process.env.PORT;
const baseurl = process.env.BASE_URL;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/joke-category', (req, res) => {
    const incomingData = req.body;
    const url = `${baseurl}/joke/${incomingData.type}`;
    superagent.get(url).end((error, resp)=>{
        if (error){
          res.status(400).send({
            status: 400,
            message: "Unable To Get A Joke"
          });
        }
        res.status(200).send(resp.body);
        let newJoke = resp.body;
      });

});

app.get('/any-joke', (req, res) => {
  const url = `${baseurl}/joke/Any`;
  superagent.get(url).end((error, resp)=>{
      if (error){
        res.status(400).send({
          status: 400,
          message: "Unable To Get A Joke"
        });
      }
      res.status(200).send(resp.body);
      let newJoke = resp.body;
    });

});

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
});