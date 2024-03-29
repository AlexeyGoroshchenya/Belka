import React, { useContext, useEffect, useState } from 'react';
import styles from './Basket.module.css'
import BasketCard from './BasketCard';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GALLERY_ROUTE, ORDER_ROUTE } from '../../utils/consts';

import tree from "../../images/tree.svg";
import leftBottom from "../../images/leftBottom2.svg";

const BasketForm = observer(() => {
    const { order } = useContext(Context)
    const router = useNavigate()
    const location = useLocation()

    const [items, setItems] = useState([])
    const [select, setSelect] = useState([])



    const removeFromBasket = () => {
        setItems(items.filter(elem => !select.some(el => el === elem.id)))
        localStorage.setItem('basket', JSON.stringify(items.filter(elem => !select.some(el => el === elem.id))))
    }

    const createOrder = () => {

        let newOrder = []

        select.forEach((el) => {
            // if(){
            let item = items.find(elem => elem.id === el)
            newOrder.push(item)
            // }
        })

        order.setOrder(newOrder)
        console.log(order);

        router(ORDER_ROUTE, { replace: false })
    }

    useEffect(() => {

        if (location.state?.itemId) setSelect(prev => [...prev, location.state?.itemId])

    }, [])

    useEffect(() => {
        if (localStorage.getItem('basket')) setItems(JSON.parse(localStorage.getItem('basket')))


    }, [])

    return (
        <div className={styles.body}>

            <div className={styles.title}>
                Корзина
            </div>

            <div className={styles.items}>

                {items.length === 0 ?
                    <div className={styles.notification}>
                        Ваша корзина пока пуста. Можете выбрать что-нибудь в <span><Link to={GALLERY_ROUTE}>галерее</Link></span>  .
                    </div>
                    :
                    items.map((item, index) => {

                        if (select.find(el => el === item.id)) { console.log(item.id); }
                        return <BasketCard
                            key={index}
                            item={item}
                            remove={removeFromBasket}
                            select={select}
                            setSelect={setSelect}
                            selected={select.find(el => el === item.id) ? true : false}
                            createOrder={createOrder}
                        />
                    })
                }

            </div>

            <div className={styles.decors}>

                <div className={styles.decorLeft}>
                    <img src={leftBottom} alt="" />
                </div>

                <div className={styles.decor}>
                    <img src={tree} alt="" />
                </div>


            </div>



        </div>
    );
});

export default BasketForm;