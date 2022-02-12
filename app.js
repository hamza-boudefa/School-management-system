const express=require('express')
const connectdb=require('./config/connectDB')
const path= require('path')
const app=express()
require('dotenv').config()
app.use(express.json())
const cors = require('cors')



app.use(cors())

connectdb()
const port=(process.env.port) || 4001


 
app.use('/teacherAPI',require('./routes/teachersRoutes'))

app.use('/adminAPI', require('./routes/adminRoutes'))

app.use('/studentAPI', require('./routes/studentRoutes'))

app.use('/postAPI',require('./routes/postRoutes'))

app.use('/classAPI', require('./routes/classesRoutes'))





if ((process.env.NODE_ENV = "production")) {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
  


app.listen(port,()=>console.log(`port listing on ${port}`))