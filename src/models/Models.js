const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    Name:{
        type:String,
        require:true,
    },
    pass:{
        type:String,
        require:true,
    },
    Address:
    {
        type:String,
        require:true,
    },
    Cpass:
    {
        type:String,
        require:true,
    },
    city:
    {
        type:String,
        require:true,
    },
    state:
    {
        type:String,
        require:true,
    },
    phone:
    {
        type:Number,
        require:true, 
    }
});
const Newstudent= new mongoose.model('Detstudent',schema);
module.exports=Newstudent;