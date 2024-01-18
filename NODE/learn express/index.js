const express = require('express')
const app = express();

app.get("/",function(req,res){
    res.send("Loaded successfully");

});

app.get("/loadparams/:id/:name",function(req,res){
    console.log(req.params);
    res.send("Its params");
});
app.get("/about",function(req,res){
    res.send("Fools its a about page");

});


app.get("*",function(req,res){
    res.send("i pranked you");

});
app.get("/about",function(req,res){
    res.send("Fools its a about page");

});



app.listen('5005',function(){
    console.log('Server Started');
});