import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import styles from "./NavBar.module.css";
import { ImTwitter } from "react-icons/im";
// import { ImYoutube } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImTelegram } from "react-icons/im";
import { useContext } from "react";
import { AppContext } from "../App";
import { ImSun } from "react-icons/im";
import ReactSwitch from "react-switch";
import { useState } from "react";
import {ImMenu} from 'react-icons/im'
import "./NavBar.css"

export default function NavBar() {
  const { isLogin, setIsLogin, theme, setTheme } = useContext(AppContext);
  const tagRef = useRef(null);
  const handleClick = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen((open) => !open);
    console.log(isOpen)
  };
  return (
    <div className="AllNavBar" ref={tagRef} id="theme">
      <ul>
        <li className={`togglemenu__menuitems ${isOpen ? "is-open" : ""}`}>
      <ul className="MainNavBar">
        
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
          </ul>
        </li>
      </ul>
      <li className="ToggleMenu" onClick={ToggleMenu}>
        <ImMenu className="MenuIcon"/>
      </li>
      <div className="Test">
        <ul className="SocialNetwork">
          <div className="Theme" onClick={handleClick}>
            <li>
              <Link to="/">
                <ImSun />
              </Link>
            </li>
          </div>

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
        </ul>
      </div>
    </div>
  );
}
