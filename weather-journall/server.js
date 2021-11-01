// Setup empty JS object to act as endpoint for all routes
// Require Express to run server and routes
const express= require('express');
const app=express();

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyparser= require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
// Cors for cross origin allowance
const cors= require('cors');
const { response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('index.HTML'));

projectData={};
object ={};
// Setup Server
const port=8000;
const server = app.listen(port, listening);
function listening(){
    console.log("server running on localhost "+ port); 
    
}
//posting data on the server side

app.post("/postData",(request,response)=>{
    projectData={
        temp:request.body.temp,
        date:request.body.date,
        content:request.body.content

    };
    
response.send(projectData);


});
//intialize all route with a call back function
app.get('/all', sendData);
// callback function to complete GET '/all'
function sendData(req,res) {
    res.send(projectData);

    }