import React from 'react'
import './NavBarSpare.css'
import {useState} from 'react'
import {ImMenu} from 'react-icons/im'

export default function NavBarSpare() {
  const [isOpen , setIsOpen] = useState(false)

  const handleClick =()=>{
     setIsOpen((open)=>(
      !open
     ))
  }
  return (
    <div>
<li className={`NavBar__menu ${isOpen ? "is-open": ""}`}>

      <li className="Toggle" onClick={handleClick}><ImMenu className="menu"/></li>
      <ul className="NavBarSpare">
        <li>home</li>
        <li>gallery</li>
        <li>contact</li>
        <li>test</li>
      </ul>
</li>
    </div>
  )
}
