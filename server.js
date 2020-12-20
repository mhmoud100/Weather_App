// Setup empty JS object to act as endpoint for all routes
projectData = {};
const express = require('express')
const app = express();
const PORT = 8000;

// Require Express to run server and routes

// Start up an instance of app
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const server = app.listen(PORT, () =>{
        console.log("Server Starting")
        console.log(`Server is Running on Port ${PORT}`)
})
data = []
app.post('/add', function (request, response) {
        const newEntry = {
                temp: request.body.temp,
                date: request.body.date,
                feeling: request.body.feeling
        }
        // console.log(req.body)
        // console.log(newEntry)
       
        projectData = newEntry
        // console.log(data)
})
app.get('/all', (req, res) => {
        console.log(projectData)
        res.send(projectData)
})