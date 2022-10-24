import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__title'>
          <Link to='/'>e-commers</Link>
        </h1>
        <nav className='header__nav'>
          <div className='header__item'><NavLink className='header__link' to='/login'><i className="fa-regular fa-user"></i></NavLink></div>
          <div className='header__item'><NavLink className='header__link' to='/purchases'><i className="fa-solid fa-bag-shopping"></i></NavLink></div>
          <div className='header__item'><NavLink className='header__link' to='/cart'><i className="fa-brands fa-opencart"></i></NavLink></div>
        </nav>
    </header>
  )
}

export default Header