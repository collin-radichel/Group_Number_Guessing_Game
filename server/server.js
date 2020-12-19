const express = require('express');
const bodyParser = require('body-parser');
const randomGame = require('./modules/randomGame');
const randomNum = require('./modules/randomNum');
const dataStorage = require('./modules/gameData');
const app = express();
const PORT = process.env.PORT || 5000;


let dataHistory = [];


// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({
   extended: true
}));


// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));


// GET & POST Routes go here


app.get('/runGame', (req, res) => {
   console.log('you got to /guesses for ya family!!');
   //call randomGame.js
   res.send(dataStorage);
})

app.post('/sendGuessesToExpress', (req, res) => {

   console.log(req.body);


   dataStorage(req.body, dataHistory);
   randomGame(req.body, randomNum(0,25), dataHistory);

   res.sendStatus(200);

})


app.listen(PORT, () => {
   console.log('Server is running on port', PORT)
})