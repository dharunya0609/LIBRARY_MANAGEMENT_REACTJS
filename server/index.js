const express = require('express')
const app = express()

const cors=require("cors")
const mongoose = require('mongoose')

const User=  require('./models/user.js')
const DATABASE_URL = 'mongodb+srv://dharunya:ridh1217@cluster0.vt0jldh.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then( () => {
    console.log("Connection open")
}).catch(err => {
    console.log("OOPS !! ERROR")
})

app.use(express.json({extended:true}))
app.use(express.urlencoded({ extended: true }));


app.use(cors())

app.get('/all',async(req,res)=>{
    try {
        const users = await User.find({})
        console.log(users)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        await User.findByIdAndDelete(id)
        res.status(200).send('success')
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.post('/edit/:id',async(req,res)=>{
    const {id}=req.params;
    const {Sname,Aname,cpy,isbn,cost,pub} = req.body
    console.log({...req.params})
    try {
        await User.findOneAndUpdate({_id:id},{Sname,Aname,cpy,isbn,cost,pub})
        res.status(200).send('success')
    } catch (error) {
        res.status(500).send(error.message)
    }
})


app.get('/view/:id',  async(req,res)=>{
    try{
        const {id} = req.params
        const users = await User.findById(id)
        res.status(200).json(users)
    }catch(error){
        res.status(500).send(error.message)
    } 
})

app.post("/signup",async(req,res)=>{
   
    const user = new User({...req.body})
    await user.save();
    res.status(200).send("success");
        
        
});



app.listen(8080,()=> console.log("server is running"))