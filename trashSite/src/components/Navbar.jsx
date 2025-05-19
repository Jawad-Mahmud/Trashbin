import React from 'react'
import { useState,useEffect } from 'react'
import DekstopNavbar from './DekstopNavbar'
import { MiniNavbar } from './MiniNavbar'

export const Navbar = () => {

 const [isDekstop, setisDekstop] = useState(window.innerWidth>768);
useEffect(() => {
const handleResize=()=>{
    setisDekstop(window.innerWidth>768);

}
window.addEventListener('resize',handleResize);


  return () => {
    window.removeEventListener('resize',handleResize);
  }
}, [])




return(
    <>
    {isDekstop ? <DekstopNavbar/>: <MiniNavbar/>}
    </>
)
}