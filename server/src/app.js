const express = require('express');
const app = express();
require('./db/conn');
const User = require('./models/user');
const cors = require('cors');
const Content = require('./models/content');

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.post('/signup',(req,res)=>{
    // console.log(req.body);
    // res.send('hello');
    const user = new User(req.body);
    user.save()
        .then(()=>{
            res.status(201);
        }).catch((err)=>{
            res.status(400);
        })
})

app.post('/login', async (req,res)=>{
    try {
        const userData = await User.find(req.body);
        // console.log(userData);
        if(userData.length === 0) res.send(null);
        else res.send(userData)
    } catch (error) {
        console.log(error);
    }
})

app.post('/profile' , async(req,res)=>{
    try {
        // console.log(req.body);
        const userData = await User.find(req.body);
        // console.log(userData);
        res.send(userData);
    } catch (error) {
        console.log(error);
    }
})

app.patch('/profile' , async(req,res)=>{
    try {
        const _id = req.body._id;
        const update = req.body.mylist;
        const result = await User.findById({_id});
        const newResult = result;
        newResult.mylist = update;
        // console.log(newResult);
        const final = await User.findOneAndUpdate(result,newResult);
        // console.log(final);
        res.send(final);
    } catch (error) {
        console.log(error);
    }
})

app.post('/content' , async(req,res)=>{
    try {
        const conData = await Content.find();
        // console.log(conData);
        res.send(conData);
    } catch (error) {
        console.log(error);
    }
})

app.post('/movie' ,async(req,res)=>{
    try {
        const data = await Content.find(req.body);
        // console.log(req.body);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})

app.listen(4000,()=>{
    console.log(`Server Started ${4000}`);
});