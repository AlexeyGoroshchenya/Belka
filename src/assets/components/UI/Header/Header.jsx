import React from 'react';
import style from './Header.module.css'
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header className={style.header}>
      <div className='header__logo'>Logo</div>
      <Navbar/>
      <button className={style.button}><span></span><span></span><span></span></button>
      </header>
    );
};

export default Header;