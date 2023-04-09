const express=require('express')

const Book=require('../model/book')
const BookController=require('../controllers/bookcontroller')
const router=express.Router()

router.get('/',BookController.getAllBooks)
router.post('/',BookController.addBook)
router.get('/:id',BookController.getByID)
router.put('/:id',BookController.updateBook)
router.delete('/:id',BookController.deleteBook)
module.exports=router