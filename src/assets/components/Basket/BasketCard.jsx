import React from 'react';
import styles from './Basket.module.css'
import { PRODUCT_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';

const BasketCard = ({item, remove, select, setSelect, selected, createOrder}) => {

    
    const router = useNavigate()

    const images = item.img.split(',')

    const toggleSelected = ()=>{
        if(!selected){
            setSelect(prev=> [...prev, item.id])
        } else {
            setSelect(select.filter(el=> el !== item.id))
        }
    }


    return (
        <div className={styles.item}>
                        <div className={styles.image}
                            style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${images[0]})` }}
                            onClick={()=>{
                
                                router(PRODUCT_ROUTE + '/' + item.id, { replace: false })
                            }}
                        >

                        </div>

                        <div className={styles.textbox}>
                            <div className={styles.form}>
                            <div className={styles.formTitle}>
                                {item.name}
                            </div>

                            <div className={styles.info}>
                                <div className={styles.price}>
                                    Стоимость: {item.price} рублей
                                </div>
                            </div>

                        </div>

                        <div className={selected?styles.actions: styles.disabled + ' ' + styles.actions}>


                            <div className={styles.button} 
                            onClick={createOrder}
                            >
                                Оформить заказ
                            </div>
                            <div className={styles.remove}
                                onClick={()=>{
                                    if(!selected){
                                        setSelect(prev=> [...prev, item.id])
                                    }
                                    remove()
                                }}>
                                Удалить из корзины
                            </div>
                        </div>

                        <div className={!selected?styles.select: styles.select + ' ' + styles.active}
                            onClick={()=>{toggleSelected()
                            }}
                        >
                            Выбрать
                        </div>
                        </div>

                        

                    </div>
    );
};

export default BasketCard;