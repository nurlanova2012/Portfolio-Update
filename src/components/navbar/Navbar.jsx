import React, {useState} from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import "./navbar.css"

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#");

  return (
   <nav>
    <a href='#' onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active" : ""} ><AiOutlineHome/></a>
    <a href='#about' onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
    <a href='#experience' onClick={()=> setActiveNav("#experience")} className={activeNav === "#experinece" ? "active" : ""}><BiBook/></a>
    <a href='#service' onClick={()=> setActiveNav("#service")} className={activeNav === "#service" ? "active" : ""}><RiServiceLine/></a>
    <a href='#contact' onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
   </nav>
  )
}
