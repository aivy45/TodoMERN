require("dotenv").config(); 
const express = require("express"); 
const app = express(); 
const cors = require("cors");

/* 
 Middleware; 
 -express.json(); To handle (parse) the json data coming in request
 -express.urlencoded({extended:true}) - to handle the data coming from URL in encoded

*/
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(cors());
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))
// Importing Routes 



app.get('/', (req, res)=>{
    res.status(200).json({
        success: true, 
        message: "Homepage"
    })
})







// Importing Routes 
const todoRoutes = require("./routes/TodoRoutes")
app.use('/', todoRoutes); 

module.exports = app; 