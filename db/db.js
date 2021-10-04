const express = require('express');
const mongoose = require('mongoose');

const mongoUri = "mongodb://localhost:27017/formData?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const connectToMongo = ()=> {
    mongoose.connect(mongoUri,()=> {
        console.log('connected to mongo successfully');
    })
}
connectToMongo();

const app = express();
app.use(express.json());
app.use("/",require("./index"))

const port = 8000;
app.listen(port,()=> {
    console.log(`Server running at port no ${port}`);
})