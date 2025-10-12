import React,{useState,useEffect} from "react";
import axios from 'axios';

import styles from './Home.module.css'

// For icons
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";


import { Link } from "react-router-dom";

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
        {/* For adding a new book */}

        <div className={styles.AddingBook}>
            <span>Add a new book</span>
            <Link to={'/Create'}>
            <IoMdAddCircle className={styles.AddIcon}/>
            </Link>
        </div>

        {
            loading?(''):(
                
                            <div className={styles.BooksMain}>
                                <div className={styles.BooksMainRow}>
                                    {books.map((Item)=> (
                                        <div className={styles.BooksBox} key={Item.id}>
                                        <h6>Name: <span>{Item.BookTitle}</span></h6>
                                        <h5>Author: <span>{Item.BookAuthor}</span></h5>
                                        <div className={styles.CustomBox}>
                                            <p>Price: ₹ <span>{Item.BookPrice}</span></p>
                                            <p>Publish Year: <span>{Item.BookPublishYear}</span></p>
                                        </div>
                                        
                                        {/* For Icons */}

                                        <div className={styles.IconsBox}>
                                            {/* For Info */}
                                            <Link to={"/"}>
                                            <FaInfoCircle/>
                                            </Link>

                                            {/* To delete */}
                                            <Link to={"/"}>
                                            <MdDelete/>
                                            </Link>

                                            {/* To edit */}
                                            <Link to={"/"}>
                                            <MdEdit/>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                    ))
                                }
                                </div>
                            </div>
                
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
