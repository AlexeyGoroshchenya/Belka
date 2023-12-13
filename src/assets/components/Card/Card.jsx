import React from 'react';
import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom';
import { ITEM_ROUTE } from '../../utils/consts';

const Card = ({item, slider = false} ) => {

    

let cardClassName = slider? styles.item + ' slider__item': styles.item

const router = useNavigate()

    return (
        <div className={cardClassName}>
            <div 
            className={styles.image}
            style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${item.img})`}}
            onClick={()=>{
                console.log(item.id)
                router(ITEM_ROUTE + '/' + item.id, { replace: true })
            }}
            ></div>
            <div className={styles.content}>

                <h2 className={styles.title}>{item.name}</h2>
                <div className={styles.price}>{item.price} рублей</div>

                <div className={styles.textbox}>
                    <div className={styles.text}>{item.desc}</div>
                </div>
                
                <div className={styles.button}
                onClick={()=>{
                    console.log(item)
                    localStorage.test =  {id: item.id, name: item.name, price: item.price};
                    console.log(localStorage.test)

                }}
                >Заказать</div>
            </div>


        </div>
    );
};

export default Card;