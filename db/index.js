const express = require("express");
const router = express.Router();
const form = require('./models');

router.get('/', async(req, res)=>{
    try {
        res.send("hii")
    } catch (error) {
            res.send("err : "+error )
    }
})

router.post("/formData", async(req, res)=>{
    try {
        const formData = new form({
            name: req.body.name,
            phone: req.body.phone,
            message: req.body.message,
            email: req.body.email,
        });
        const data = await formData.save();
        res.send(data);
     } catch (error) {
         res.send("err is: "+error);
         console.log("err occured");
     }
})

module.exports =router;
