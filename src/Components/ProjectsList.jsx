import React from "react";
import pic from "../img/1.jpg";
import styles from './ProjectsList.module.css'
import {useState , useEffect} from 'react'
import axios from 'axios'


export default function ProjectsList() {
  const [data , setData] = useState([])
  useEffect(()=>{
   
  },[])

  return (
    <div>
     
        <div className={styles.ProjectItems}>

      <img src={pic} alt="cart" />
      <h3>پروژه شماره 1</h3>
      <h4>موضوع پروژه</h4>
        </div>
      </div>
    
  );
}
