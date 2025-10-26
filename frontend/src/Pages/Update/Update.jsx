import React, { useState,useEffect } from "react"
import axios from "axios";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {useSnackbar } from 'notistack'
import styles from './Update.module.css';
const Update=()=>{

    const [BookTitle,setTitle]=useState('');
    const [BookAuthor,setAuthor]=useState('');
    const [BookPrice,setPrice]=useState('');
    const [BookPublishYear,setPublishYear]=useState('');
    const [Loading,setLoading]=useState(false);

    const navigate=useNavigate();
    const {enqueueSnackbar}=useSnackbar(); 
    const {id}=useParams();

    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`).then((response)=>{
            setTitle(response.data.BookTitle);
            setAuthor(response.data.BookAuthor);
            setPrice(response.data.BookPrice);
            setPublishYear(response.data.BookPublishYear);
            setLoading(false);
        }).catch((error)=>{
            setLoading(false);
            alert(error);
            console.log(error);
        })
    },[])
    const updateBook=() => {
        const data={
            BookTitle,
            BookAuthor,
            BookPrice,
            BookPublishYear};
        setLoading(true);
        axios.put(`http://localhost:5555/books/${id}`,data).then(()=>{
            setLoading(false);
            enqueueSnackbar("Book Details Updated",{variant:'success'});
            navigate('/');
        }).catch((error)=>{
            setLoading(false);
            // console.log(error);
            // alert("check");
            enqueueSnackbar("Something Went Wrong Check Console",{variant:'warning'});
            if(error.response)
            {
                console.error("Response Data",error.response.data);
                console.error("Response Status",error.response.status);
                console.error("Response Headers",error.response.headers);

            }
            else if(error.request)
            {
                console.log("No Response Received",error.request);

            }
            else{
                console.log("Error",error.message);
            }

        })
    }
    return(
        <>
        {/* for update form */}
        <div className={styles.CreateBook}>
            <div className={styles.CreateBookRow}>
                <h6>Update Book {BookTitle}</h6>

                {Loading?(console.log("Loading")):('')}

                <div className={styles.CreateBookBox}>
                    <input type='text' value={BookTitle} onChange={(e)=>setTitle(e.target.value)}  placeholder='Book Title' name='' id=''/>
                </div>
                <div className={styles.CreateBookBox}>
                    <input type='text' value={BookAuthor} onChange={(e)=>setAuthor(e.target.value)} placeholder='Book Author' name='' id=''/>
                </div>
                <div className={styles.CreateBookBox}>
                    <input type='number' value={BookPrice} onChange={(e)=>setPrice(e.target.value)} placeholder='Book Price' name='' id=''/>
                </div>
                <div className={styles.CreateBookBox}>
                    <input type='number' value={BookPublishYear} onChange={(e)=>setPublishYear(e.target.value)} placeholder='Publish Year' name='' id=''/>
                </div>
                
                <button onClick={updateBook} className={styles.Btn}>update Book</button>
                
            </div>  
        </div>

        </>
    )
}
export default Update;