const mongoose = require('mongoose');
const {Schema}=mongoose;

const formSchema = new Schema({
    name:{
        type: 'String',
        required:true,
    },
    phone:{
        type: 'Number',
        required:true,
    },
    email:{
        type: 'String',
        required:true,
    },
    message:{
        type: 'String',
        required:true,
    },
    date:{
        type: 'date',
        default: Date.now,
    }
});
const formData = mongoose.model("ContactForm",formSchema);
module.exports = formData;
