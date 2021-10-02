import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import styles from './post.module.css';


// const url = "http://localhost:4000/blogs";
import contentstack from 'contentstack';
const Stack = contentstack.Stack("blt96b454e1621151cb","csbc2f8db8f33ca5c295bb8712","development");



const Image = styled.img`
width: 500px;
`;

interface Blog{
    football_blog_title : string;
    football_blog_content : string;
    football_blog_image: {
      url : string;
    }
    football_related_blog:[{
      related_links:[{
        related_link_href:[{
          uid: string,
        }]
        related_link_title: string;
      }]
    }]
}
 const Post : React.FC = () => {
    
    const [blog, setBlog] = useState<Blog>({football_blog_title:'', football_blog_content:'', football_blog_image:{url : ''}, football_related_blog:[{related_links:[{related_link_href: [{uid :''}], related_link_title: ''}]}]});
    

  let params:any=useParams();
  const Query = Stack.ContentType('football_blog').Entry(params.blogId).includeReference(['football_author', 'football_related_blog']);

  useEffect(()=>{
      Query.fetch()
      .then(function success(entry) {
          setBlog(entry.toJSON())       
      }, 
      function error(err) {
          console.log(err)
      })

  },[Query])
  // console.log(blog.football_related_blog[0].related_links[0].related_link_title);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
      <h1 className={styles.title}>{blog.football_blog_title}</h1>
      {/* <hr /> */}
      <Image src={blog.football_blog_image.url} className={styles.image}></Image>
      <p>{blog.football_blog_content}</p>
      </div>
      <div className={styles.aside}>
        {blog.football_related_blog?
        blog.football_related_blog[0].related_links.map((item : any)=>(
        <div key={item.uid} className={styles.asideItem}>
          {item.related_link_href.map((elem:any) =>(
            <Link to={"/post/" + elem.uid} > <p>{item.related_link_title}</p></Link>
          ))}
        <br></br>
        </div>
        ))
          :
       <h5>None</h5>
       }
       </div>
    </div>
  );
}

export default Post;