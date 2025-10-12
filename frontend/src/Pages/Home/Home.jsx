import React,{useState,useEffect} from "react";
import axios from 'axios';

import styles from './Home.module.css'

// For icons
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

const Home=()=>{
    const [books,setBooks]=useState([]);
    const [loading,setLoading]=useState(false);
    
    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:5555/Books').then((res)=>{
            setBooks(res.data.data);
            setLoading(false)
        }).
        catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    },[])
    return(
        <>
        <div className={styles.CustomMess}>
            <h6>MERN Book Store</h6>
        </div>

        {
            loading?(''):(
                books.map((Item)=>(
                            <div className={styles.BooksMain} key={Item.id}>
                                <div className={styles.BooksMainRow}>
                                    <div className={styles.BooksBox}>
                                        <h6>{Item.BookTitle}</h6>
                                        <h5>{Item.BookAuthor}</h5>
                                        <div>
                                            <p>Price: ₹ {Item.BookPrice}</p>
                                            <p>Publish Year: {Item.BookPublishYear}</p>
                                        </div>
                                        
                                        {/* For Icons */}

                                        <div>
                                            {/* For Info */}
                                            <FaInfoCircle/>

                                            {/* To delete */}
                                            <MdDelete/>

                                            {/* To edit */}
                                            <MdEdit/>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                ))
            )
        }


        {/* "BookTitle": "Title",
            "BookAuthor": "Easy Coding Tutorial",
            "BookPrice": 230,
            "BookPublishYear": 2024, */}


        </>
    )
}
export default Home