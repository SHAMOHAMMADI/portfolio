import React from "react";
import pic from "../img/lowPic/website.png";
import pic2 from "../img/lowPic/alphaWebsitefr.png"
import styles from './ProjectsList.module.css'
import {useState , useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


export default function ProjectsList(props) {
  const [data , setData] = useState([])
  useEffect(()=>{
   axios.get("http://localhost:3020/Projects").then(result=>{
    setData(result.data.websites)
   }).catch((err)=>{
   console.log(err)
   })
  },[])

  return (
    <div className={styles.projectscreen}>
     
        <div className={styles.ProjectItems}>
       
      <img src={props.websites.URL} alt="cart" />
      
      <div className={styles.text}>
      <h3>{props.websites.name}</h3>
      <h4>{props.websites.category}</h4>
      </div>
        </div>
      </div>
    
  );
}
