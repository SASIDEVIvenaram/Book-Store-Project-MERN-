import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
    {
        BookTitle:{
            type:String,
            required:true,
        },
        BookAuthor:{
            type:String,
            required:true,
        },
        BookPrice:{
            type: Number,
            required: true,
        },
        BookPublishYear:{
            type: Number,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model("Book",BookSchema);