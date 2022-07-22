const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Rstudent').then(()=>{
    console.log("connected");
}).catch((e)=>{
    console.log("not Connected");
})
