import React, { useContext, useState } from 'react';
import styles from './RegisterForm.module.css'
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';
import { Context } from '../../..';
import { registration } from '../../http/userAPI';
import { observer } from 'mobx-react-lite';

const RegisterForm = observer(() => {

    const { user } = useContext(Context)

    const router = useNavigate()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const startRegister = async () => {

        try {

            const response = await registration(name, phone, password)
            user.setIsAuth(true)
            
            user.setUser(response)
            console.log(user.user);

        } catch (e) {
            alert(e.response.data.message)
        }



    }


    return (
        <div className={styles.login__form}>
            <div className={styles.body}>

                <div className={styles.title}>
                    Регистрация
                </div>


                <div className={styles.inputs}>
                    <input type="text"
                        placeholder='Имя'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)

                        }}
                    />
                    <input type="tel"
                        placeholder='Телефон'
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value)

                        }}
                    />
                    <input type="password"
                        placeholder='Задайте пароль'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)

                        }}
                    />

                </div>

                <div className={styles.button}

                    onClick={() => startRegister()}


                >
                    Зарегистрироваться
                </div>
                <div className={styles.register}
                    onClick={() =>
                        router(LOGIN_ROUTE, { replace: false })
                    }
                >
                    Уже регистрировались? Можете залогиниться <span>здесь.</span>
                </div>

            </div>
        </div>
    );
})

export default RegisterForm;