const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const studentTypeSchema = new Schema({

    type:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
    }
},{
    timestamps: true,
    zone: 'Asia/Kolkata',
})

module.exports = mongoose.model('StudentType',studentTypeSchema);