const { json } = require('express');
const  Book=require('../model/book')
const getAllBooks=async(req,res)=>{
    let books;
    try{
        books=await Book.find();

    }catch(err){
        console.log(err)
    }
    if(!books){
        return res.status(404).json({message:"no book found"})

    } else {
        return res.status(200).json({books})

    }
}
const getByID=async(req,res)=>{
const id=req.params.id
    let book;
    try{
       book=await Book.findById(id)
    }catch(err){
        console.log(err)
    }
}
const addBook=async(req,res)=>{
    const{name,author,description,price,available,image}=req.body
    let book;
    try{
        book=new Book({
            name,
            author,
            description,
            price,
            available,
            image
        })
        await book.save()
    }catch(err){
        console.log(err)
    }if (!book){
        return res.status(404).json({message:"no book found"})

     }return res.status(200).json({book})
}
const updateBook=async(req,res)=>{
    const id=req.params.id
    const {name,author,description,price,available,image}=req.body
    let book;
    try{
        book=await Book.findByIdAndUpdate(id,{name,author,description,price,available,image});
        book=await book.save()
    }catch(err){
        console.log(err)
    }if(!book){
        return res.status(404).json({message:"book not found"})

    }return res.status(201).json({book})
}
const deleteBook=async(req,res)=>{
    const id =req.params.id
    let book;
    try{ 
        book = await Book.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }if(!book){
        return res.status(404).json({message:"book not found to delete"})
        }return res.status(200).json({message:"book successfully Deleted "});
}
exports.getAllBooks=getAllBooks
exports.addBook=addBook 
exports.getByID=getByID 
exports.updateBook=updateBook
exports.deleteBook=deleteBook