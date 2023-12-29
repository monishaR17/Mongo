const Express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


const user = require('./model');

const app = Express();

mongoose.connect('mongodb://127.0.0.1:27017/DGV-Notes')
.then(() => { console.log("connection to database");})



app.use(bodyparser.json());

app.listen(3001,() => {console.log("Server running 3000");
})



app.get('/', (req,res)=>{
    res.send("Hello world");
})
app.route('/api/notes')
 .get((req,res)=>{
    user.find().then((users)=>{
        res.send(users);
    }).catch((err)=>{
        res.send(err);
    })
    res.send("get all notes");
 })
 .post((req,res)=>{

    if(req.body) {
       user.create(req.body).then((user) =>{
        res.send(user);
       }).catch((err) =>{
        res.send(err);
       })
       res.status(200).json({
        status: 'success',
        error: 'req body cannot be empty',
       })
        return res.status(400).json({
            status:'error',
            error:'req body cannot be empty', 
        })
    }

    return res.status(400).json({
        status: 'err',
        error: 'req body cannot be empty',
    })
 })
 .patch((req,res)=>{
    res.send("post a note");
 })
 .delete((req,res)=>{
    res.send("post a note");
 })

