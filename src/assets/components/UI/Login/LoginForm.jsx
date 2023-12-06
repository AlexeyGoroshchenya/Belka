import React from 'react';
import styles from './LoginForm.module.css'
import { useNavigate } from 'react-router-dom';
import { REGISTER_ROUTE } from '../../../utils/consts';

const LoginForm = () => {

    const router = useNavigate()

    console.log(1);
    return (
        <div className={styles.login__form}>
            <div className={styles.body}>

            <div className={styles.title}>
            Авторизация
            </div>
            <div className={styles.inputs}>
            <input type="text" placeholder='Логин' />
            <input type="password" placeholder='Пароль' />

            </div>
            <div className={styles.button}>
            Войти
            </div>
            <div className={styles.register}
            onClick={()=> 
                router(REGISTER_ROUTE, { replace: true })
            }
            >
            Еще не регистрировались? Можете сделать это <span>здесь.</span> 
            </div>
            
            </div>
        </div>
    );
};

export default LoginForm;