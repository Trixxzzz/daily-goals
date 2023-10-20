import React from 'react'
import "../App.css"
import {Link} from "react-router-dom"

const Header = () => {
  return <>
    <nav>Get Ready to complete your daily goals!</nav>
    <div className="header">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/user/tempId'>User</Link>

    </div>
  </>;
}

export default Header