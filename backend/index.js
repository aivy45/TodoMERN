const app  = require('./app'); 


const {connectDb} = require('./config/dbConnect')
connectDb();

const PORT= process.env.PORT|| 4001

app.listen(PORT , ()=>{
    console.log(`Server is high and runnig at ${PORT} `)
})