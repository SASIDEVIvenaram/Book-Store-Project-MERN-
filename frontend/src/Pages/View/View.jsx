import React, { useEffect, useState } from "react";
import {Link,useParams } from "react-router-dom";
import styles from './View.module.css';
import axios from "axios";
const View=()=>{

    const [Book,setBook]=useState({});
    const [Loading,setLoading]=useState(false);

    const {id}=useParams();

    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`).then((response)=>{
            setBook(response.data);
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[id])



    // "_id": "68ea621f948ef2967daf78d1",
    // "BookTitle": "Rich Dad Poor Dad",
    // "BookAuthor": "Robert",
    // "BookPrice": 250,
    // "BookPublishYear": 2010,
    // "createdAt": "2025-10-11T13:56:47.506Z",
    // "updatedAt": "2025-10-27T05:21:04.774Z",

    return(
        <>
        <div className={styles.ViewBook}>
            <div className={styles.ViewBookRow}>
                <h6>Book Id: <span>{Book._id}</span></h6>
                <h4>Book Author: <span>{Book.BookAuthor}</span></h4>
                <h5>Book Title: <span>{Book.BookTitle}</span></h5>
                
                <div className={styles.CustomDiv}>
                    <p>Price: <span>{Book.BookPrice}</span></p>
                    <p>Publish Year: <span>{Book.BookPublishYear}</span></p>


                </div>
                <div className={styles.Details}>
                    <p>Book Created At <span>{new Date(Book.createdAt).toString()}</span></p>
                    <p>Book Updated At <span>{new Date(Book.updatedAt).toString()}</span></p>
                </div>

                <Link className={styles.ViewBtn} to={"/"}>Home</Link>

            </div>
        </div>
        
        </>
    );
}

export default View;