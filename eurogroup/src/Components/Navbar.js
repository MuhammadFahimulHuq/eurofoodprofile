import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
export const Navbar = () => {
  const [Style, setStyle] = useState('link link-style')
  const [StyleOne,setStyleOne] = useState('link')
  const [StyleTwo,setStyleTwo] = useState('link')
  const[StyleThree,setStyleThree] =useState('link')     
  const addStyle=()=>{
     setStyle('link link-style')
     setStyleOne('link')
     setStyleTwo('link')
     setStyleThree('link')
  } 
  const addStyleOne=()=>{
      setStyleOne('link link-style')
      setStyle('link')
      setStyleTwo('link')
      setStyleThree('link')
  }
  const addStyleTwo=()=>{
      setStyleTwo('link link-style')
      setStyle('link')
      setStyleOne('link')
      setStyleThree('link')
  }
  const addStyleThree=()=>{
      setStyleThree('link link-style')
      setStyle('link')
      setStyleOne('link')
      setStyleTwo('link')
  }
  



  return <div className='navbar-container'>
     
    <nav className="link-box">
      <span><Link className={Style} onClick={addStyle} to="/" >Home</Link></span>
      <span><Link  to="/About" className={StyleOne} onClick={addStyleOne} >About</Link></span>
      <span><Link to="/Product" className={StyleTwo} onClick={addStyleTwo}>Products</Link></span>
      <span><Link to="/Contact"  className={StyleThree} onClick={addStyleThree}>Contact</Link></span>
    </nav>
  
  </div>;
};
