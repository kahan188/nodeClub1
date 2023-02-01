const express = require("express")
const mongoose = require("mongoose")
const PORT = 3000
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// const studentRoutes = require('./routes/StudentRoutes');
// const studentTypeRoutes = require('./routes/StudentTypeRoutes');
// const examRoutes = require('./routes/ExamRoutes');
// const studentExamRoutes = require('./routes/StudentExamRoutes');
const userRoutes = require('./routes/UserRoutes');
//const productRoutes = require('./routes/ProductRoutes');

// app.use('/student',studentRoutes);
// app.use('/studentType',studentTypeRoutes);
// app.use('/exam',examRoutes);
// app.use('/studentexam',studentExamRoutes);
//app.use('./product',productRoutes);
app.use('./user',userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/users', 
{useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>{
    console.log('DB CONNECTED');
}).catch((err)=>{
    console.log(err);
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})