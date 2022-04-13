const express=require('express')
const app = express()
const engine = require("express-handlebars").engine;
app.engine("handlebars", engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.listen(3000,()=>{
    console.log("le port est en marche");
})

app.get("/login" ,function(req,res){
    res.render('home')
    
})

app.post("/result",function(req,res){
    console.log( req.body)
   
})