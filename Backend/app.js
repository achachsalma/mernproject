//B4OD5cmKOvFKgRW8
const express=require('express')
const mongoose=require('mongoose')
const app =express()
app.use(express.json())
const router=require('./routes/bookroute')
app.use('/books',router)
mongoose.connect("mongodb+srv://admin:B4OD5cmKOvFKgRW8@cluster0.htiqrci.mongodb.net/bookstore?retryWrites=true&w=majority").then(()=>{
    console.log("connected to db")
}).catch((err)=>{
 console.log(err) 
});
app.listen(3000, () => {
    console.log("server listing to 3000"); 
});