import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View=()=>{

    const [Book,setBook]=useState([]);
    const [Loading,setLoading]=useState(false);

    const {id}=useParams();

    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost/Books/${id}`).then((response)=>{
            setBook(response.data);
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[])
    return(
        <>
        <h1> View</h1>
        </>
    );
}

export default View;