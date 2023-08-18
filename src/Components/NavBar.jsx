import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ImTwitter } from "react-icons/im";
// import { ImYoutube } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImTelegram } from "react-icons/im";

export default function NavBar() {
  return (
    <div>
      <ul className={styles.NavBar}>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Resume">Resume</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <div className={styles.Test}>
          <div className={styles.SocialNetwork}>
            <li>
              <Link to="/">
                <ImTwitter />
              </Link>
            </li>
            {/* <li><Link to="/"><ImYoutube/></Link></li> */}
            <li>
              <Link to="/">
                <ImWhatsapp />
              </Link>
            </li>
            <li>
              <Link to="/">
                <ImInstagram />
              </Link>
            </li>
            <li>
              <Link to="/">
                <ImTelegram />
              </Link>
            </li>
          </div>
        </div>
      </ul>
     
	
       
    </div>
  );
}
