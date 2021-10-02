import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './blog.module.css';

import contentstack from 'contentstack';
const Stack = contentstack.Stack("blt96b454e1621151cb","csbc2f8db8f33ca5c295bb8712","development");
const data = Stack.ContentType('football_blog').Query().includeReference(['football_author', 'football_related_blog']).toJSON().find();


export default function Blog(){
    let [blogs, setBlogs] =useState([]);

    useEffect(() => {
      data.then((result) => {
        setBlogs(result[0]);
        
      })
    },[])
    
    return (
        <div className={styles.mainContainer}>
        {
            blogs.map((blog: any) =>{              
              return(
               <Link to={"/post/" + blog.uid} key={blog.uid} className={styles.link}>
             
               <div className={styles.card} >
                <div className={styles.blogcard} >
             <img src={blog.football_blog_image.url} className={styles.blogthumbnail} />
           <div className={styles.blogdetails} >
               <h1>{blog.football_blog_title}</h1>
               <p>{blog.football_author[0].author.author_name}</p>
           </div>
         </div>
         </div>
     
             </Link>
              )
            })
          }
          </div>
    )
}