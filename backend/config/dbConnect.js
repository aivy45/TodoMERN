const mongoose = require("mongoose")

const {MONGODB_URL}= process.env

exports.connectDb = ()=>{
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((conn)=>{
        console.log("Database connection is successful")
        console.log(`Host name ${conn.connection.host}`)
    })
    .catch((error)=>{
        console.log("Database connection is fail...!")
        console.log(`DB connection Error: ${error}`)
        process.exit(1)
    })
}