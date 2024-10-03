const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/TodoRoute')
const cors = require('cors');
const PORT  = process.env.port 
const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{console.log("mongodb is connected");})
.catch(()=>{console.log("connection error")})

app.use(routes)

app.listen(PORT,()=>{
    console.log(`App is listning on port ${PORT}`);
})

