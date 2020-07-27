var path = require('path')
const express = require('express')
const serverless = require('serverless-http');
const bodyParser = require('body-parser')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')

// requiring the dotenv to hide my api key
const dotenv = require('dotenv');
dotenv.config();

// Require the Aylien npm package
var aylien = require("aylien_textapi");

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());

// You could call it aylienapi, or anything else
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
})

app.post('/test', detectSentiment)

function detectSentiment(req, res) {
    textapi.sentiment({
        'text': req.body.formText
    }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.send(response)
        }
    });
}

module.exports.handler = serverless(app);