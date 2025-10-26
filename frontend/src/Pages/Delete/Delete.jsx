import React, { useState } from "react";

import { useNavigate,useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import styles from './Delete.module.css'
import axios from 'axios';
const Delete=()=>{
    const[Loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const {id}=useParams();
    const {enqueueSnackbar}=useSnackbar();

    const DeleteBook=()=>{
        setLoading(true);
        axios.delete(`http://localhost:5555/Books/${id}`).then(()=>{
            setLoading(false);
            enqueueSnackbar(`Book Deleted Who's Id is ${id}`,{variant:'success'});
            navigate("/");

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
        <div className={styles.DeleteBookMain}>
            <h6>Want To Delete The Book Id: <span>{id}</span></h6>
            <button className={styles.Btn} onClick={DeleteBook}>Delete</button>
        </div>
        </>        
    )
}
export default Delete;