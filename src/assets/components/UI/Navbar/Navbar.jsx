import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
        <a>1</a>
        <a>2</a>
        <a>3</a>
                {/* <Link to='/' className='navbar__link'>Home</Link>
                <Link to='/posts' className='navbar__link'>Posts</Link>
                <Link to='/about' className='navbar__link'>About</Link> */}
      </nav>
    );
};

export default Navbar;