import React from "react";
import pic from "../img/1.jpg";
import styles from './ProjectsList.module.css'


export default function ProjectsList() {
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
