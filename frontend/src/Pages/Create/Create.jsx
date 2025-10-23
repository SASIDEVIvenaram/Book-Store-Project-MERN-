import React, { useState } from 'react';
import styles from './Create.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useSnackbar } from 'notistack'
const Create=()=>{

    const [BookTitle,setTitle]=useState('');
    const [BookAuthor,setAuthor]=useState('');
    const [BookPrice,setPrice]=useState('');
    const [BookPublishYear,setPublishYear]=useState('');
    const [Loading,setLoading]=useState(false);

    const navigate=useNavigate();
    const {enqueueSnackbar}=useSnackbar();
    const SaveBook=() => {
        const data={BookTitle, BookAuthor, BookPrice, BookPublishYear,};
        setLoading(true);
        axios.post("http://localhost:5555/Books/",data).then(()=>
        {
            setLoading(false);
            enqueueSnackbar("Book Created",{variant:'success'});
            navigate('/');
        }).catch((error)=>{
            setLoading(false);
            // console.log(error);
            // alert("check");
            enqueueSnackbar("Something Went Wrong Check Console",{variant:'error'});
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

    return (
        <>
        <div className={styles.CreateBook}>
            <div className={styles.CreateBookRow}>
                <h6>Create Book Now</h6>

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
                
                <button onClick={SaveBook} className={styles.Btn}>Save Book</button>
                
            </div>  
        </div>
        </>
    )

}

export default Create