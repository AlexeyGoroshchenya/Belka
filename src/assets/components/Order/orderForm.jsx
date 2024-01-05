import React, { useState } from 'react';
import styles from './order.module.css'
import { useNavigate } from 'react-router-dom';
import { GALLERY_ROUTE, PRODUCT_ROUTE } from '../../utils/consts';

const OrderForm = ({
    orders,
    addOrder,
    orderCreated,
    isAuth,
    userName,
    setUserName,
    userPhone,
    setUserPhone,
    note,
    setNote }) => {

    const totalPrice = orders.reduce((sum, current) => sum + current.price, 0)

    const [isName, setIsName] = useState(true)
    const [isPhone, setIsPhone] = useState(true)

    const router = useNavigate()

    const validate = () => {

        if (isAuth) {
            addOrder()
            return
        } 
        
        let name = false
        let phone = false


            if (userName.match(/[^а-яА-яa-zA-Z\s]/) || userName.length < 2) {
                setIsName(name)
            } else {
                setIsName(true)
                name = true
            }

            if (userPhone.length < 10 || userPhone.match(/[^0-9\(\)\-\+]/)) {
                setIsPhone(phone)
            } else {
                setIsPhone(true)
                phone = true
            }

            if(!name || !phone) return
            console.log(name, phone);
            addOrder() 

    }

    if (orderCreated) return (
        <div className={styles.body}>
            <div className={styles.title}>
                Заказ оформлен успешно. В ближайшее время мы свяжемся с Вами.
            </div>

            <div className={styles.button}
                onClick={() => {
                    router(GALLERY_ROUTE, { replace: false })
                }}>
                Вернуться в галерею
            </div>
        </div>
    )

    return (
        <div className={styles.body}>

            <div className={styles.title}>
                Оформить заказ
            </div>

            <div className={styles.items}>
                {orders.map(item =>
                    <div key={item.id} className={styles.item}>
                        <div className={styles.image}
                            style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${item.img?.includes(",") ? item.img.split(',')[0] : item.img})` }}
                            onClick={() => {
                                router(PRODUCT_ROUTE + '/' + item.id, { replace: false })

                            }}
                        ></div>
                        <div className={styles.form}>
                            <div className={styles.formTitle}>
                                {item.name}
                            </div>
                            <div className={styles.price}>
                                Стоимость: {item.price} рублей

                            </div>
                        </div>
                    </div>


                )}




            </div>

            <div className={styles.result}>
                {/* <div className={styles.discont}>
                    Ваша скидка:
                </div> */}

                <div className={styles.totalPrice}>
                    Общая стоимость: <span>{totalPrice}</span> рублей.
                </div>

            </div>

            {
                !isAuth ? <div className={styles.contacts}>
                    <div className={styles.name}>
                        <label htmlFor="name">Имя: </label>
                        <input type="text"
                            id='name'
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}

                        />
                        {
                            !isName ? <div className={styles.nameNotice}>Это обязательное поле</div> : ''
                        }


                    </div>
                    <div className={styles.phone}>
                        <label htmlFor="tel">Телефон: </label>
                        <input type="tel"
                            id='tel'
                            value={userPhone}
                            onChange={(e) => {
                                setUserPhone(e.target.value)
                            }}
                        />
                        {
                            !isPhone ? <div className={styles.phoneNotice}>Это обязательное поле</div> : ''

                        }
                    </div>
                </div>
                    : ''
            }

            <div className={styles.note}>
                <label htmlFor="note">Примечание: </label>
                <textarea type="text"
                    id='note'
                    value={note}
                    onChange={(e) => {
                        setNote(e.target.value)
                    }}

                />

            </div>

            <div className={styles.button}
                onClick={validate}>
                Отправить заказ
            </div>


        </div>
    );
};

export default OrderForm;