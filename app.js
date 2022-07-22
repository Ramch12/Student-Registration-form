const express=require('express');
const app=express();
const port=process.env.port || 3000;
require("./src/db/conn");
const path=require('path');
const hbs=require("hbs");

const staticpath=path.join(__dirname,"./public");
const template_path=path.join(__dirname,"./templates/views");
const partials_path=path.join(__dirname,"./templates/partials");
app.use(express.static(staticpath));

app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);
const Newstudent=require('./src/models/Models');

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/student',(req,res)=>{
    res.render('index');
})
app.get('/register',(req,res)=>{
     res.render('register');
})
app.post("/NewStudent",async(req,res)=>{
    try{
          const pass=req.body.Pass;
          const Cpass=req.body.Cpass;
          if(pass==Cpass)
          {
            const New= new Newstudent({
                Name:req.body.Name,
                Address:req.body.Address,
                city:req.body.city,
                state:req.body.state,
                phone:req.body.phone,

            })
           const registered=await New.save();
           res.status(200).render('index');
          }
          else{
            res.status(400).send("Password did't match");
          }
    }
    catch(e)
    {
        res.status(400).send(e);
    }
});
app.listen(port,()=>{
    console.log(`Your server is running on port ${port}`);
})
