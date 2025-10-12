import express from 'express';
import { MONGODBURL, PORT } from './config.js';
import mongoose from 'mongoose';
import {Book} from './models/BookSchema.js';

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    console.log(res);
    return res.status(200).send("MERN STACK BOOK APP");
})

// TO SAVE DATA INTO DB
app.post('/Books',async(req,res)=>{
    try{
        if((
            !req.body.BookTitle ||
            !req.body.BookAuthor ||
            !req.body.BookPrice ||
            !req.body.BookPublishYear
        ))
        {
            return res.status(400).send({message: "Sorry All Fields Are Required"});   
        }

        const NewBook={
            BookTitle: req.body.BookTitle,
            BookAuthor: req.body.BookAuthor,
            BookPrice: req.body.BookPrice,
            BookPublishYear:req.body.BookPublishYear
        }
        const book = await Book.create(NewBook);
        return res.status(201).send(book);
    }
    catch(error){
        console.log(error);
        res.status(500).send({message:error.message});
    }
})


//Get all the data from db
app.get('/Books',async(req,res)=>{

    try {
        const books = await Book.find({});
        return res.status(200).json({
            Total: books.length,
            data : books,
        })
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message:error.message});
        
    }
})

// Get one book by id
app.get('/Books/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const book=await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error.message})
        
    }
})

//Update the book by id
app.put('/Books/:id', async(req,res)=>{
    try {
        if((
            !req.body.BookTitle ||
            !req.body.BookAuthor ||
            !req.body.BookPrice ||
            !req.body.BookPublishYear
        ))
        {
            return res.status(400).send({message: "Sorry All Fields Are Required"});   
        }
        //Getting the id
        const {id}=req.params;

        const result = await Book.findByIdAndUpdate(id,req.body)

        if(!result)
        {
            return res.status(404).json({message:"Book Not Found"});
        }
        return res.status(200).send({message:"Updated Successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
})

//Delete book by id
app.delete('/Books/:id', async(req,res)=>{
    try{
        const {id}=req.params;
        const result= await Book.findByIdAndDelete(id);

        if(!result)
        {
            return res.status(404).json({message:"Book Not Found"});
        }
        return res.status(200).send({message:"Deleted Successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).send({message:error.message})
    }
})
mongoose.connect(MONGODBURL).then(()=>{
    console.log("Connected to DB")
    app.listen(PORT,()=>{
    console.log(`Backend is start at PORT ${PORT}`);
    });
    
}).catch((error)=>{
    console.log(error);
})

