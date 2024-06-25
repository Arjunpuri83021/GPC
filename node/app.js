const express=require('express') /// module
const ApiRouter=require('./routers/router')
const app=express()
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/8AmNode').then(()=>{
    console.log("server is connected successfully")
}).catch((error)=>{
    console.log("error in database",error)
})


// app.get('/home',(req,res)=>{
//     res.send("hello this is get api")
// })

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use(ApiRouter)
app.listen(5000,()=>{
    console.log("server is runnig on 5000 port")
})
