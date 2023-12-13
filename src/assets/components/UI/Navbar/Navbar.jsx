import React, { useContext } from 'react';
import styles from './Navbar.module.css'
import { Context } from '../../../..';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, GALLERY_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../../../utils/consts';
import { observer } from "mobx-react-lite"

const Navbar = observer(() => {

    const { user } = useContext(Context)
    const router = useNavigate()

const logout = ()=>{
user.setIsAuth(false)
user.setUser({})
// localStorage.removeItem('token')

}

    return (
        <nav className={styles.navbar}>

            {/* {user.isAuth && (user.user.role === 'ADMIN') ?

                <div className={styles.button}
                    onClick={() =>
                        router(ADMIN_ROUTE, { replace: true })
                    }
                >Админ</div>
                :
                ''
            } */}

            <div className={styles.button}
                onClick={() =>
                    router(HOME_ROUTE, { replace: true })
                }
            >Домой</div>
            <div className={styles.button}
                onClick={() =>
                    router(GALLERY_ROUTE, { replace: true })
                }
            >Галерея</div>

            {
                user.isAuth ?
                    <>
                        <div className={styles.button}
                            onClick={() =>
                                logout()
                                
                            }
                        >Выйти</div>

                    </>

                    :
                    <>
                        <div className={styles.button}
                            onClick={() =>

                                router(LOGIN_ROUTE, { replace: true })
                            }
                        >Войти</div>
                        <div className={styles.button}
                            onClick={() =>
                                router(REGISTER_ROUTE, { replace: true })
                            }
                        >Регистрация</div>
                    </>


            }


            {/* <Link to='/' className='navbar__link'>Home</Link>
                <Link to='/posts' className='navbar__link'>Posts</Link>
                <Link to='/about' className='navbar__link'>About</Link> */}
        </nav >
    );
}
)

export default Navbar;