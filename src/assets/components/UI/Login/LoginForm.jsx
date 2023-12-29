import React, { useContext, useState } from 'react';
import styles from './LoginForm.module.css'
import { useNavigate } from 'react-router-dom';
import { REGISTER_ROUTE } from '../../../utils/consts';
import { Context } from '../../../..';
import { login } from '../../../http/userAPI';

const LoginForm = () => {

    const { user } = useContext(Context)

    const router = useNavigate()

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const startLogin = async () => {

        try {

            const response = await login(phone, password)
            user.setIsAuth(true)
            
            user.setUser(response)
            window.history.back()

        } catch (e) {
            alert(e.response.data.message)
        }



    }

    
    return (
        <div className={styles.login__form}>
            <div className={styles.body}>

            <div className={styles.title}>
            Авторизация
            </div>

            
            <div className={styles.inputs}>
                <input type="text"
                 placeholder='Телефон' 
                 value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value)

                        }}
                 />
                <input type="password"
                 placeholder='Пароль' 
                 value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)

                        }}
                 />

            </div>
            
            <div className={styles.button}
            
            onClick={()=> startLogin()}
            
            
             
            >
            Войти
            </div>
            <div className={styles.register}
            onClick={()=> 
                router(REGISTER_ROUTE, { replace: false })
            }
            >
            Еще не регистрировались? Можете сделать это <span>здесь.</span> 
            </div>
            
            </div>
        </div>
    );
};

export default LoginForm;