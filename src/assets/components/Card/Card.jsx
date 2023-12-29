import React from 'react';
import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom';
import { ITEM_ROUTE } from '../../utils/consts';

const Card = ({item, slider = false} ) => {

const images = item.img.split(',')


let cardClassName = slider? styles.item + ' slider__item': styles.item

const router = useNavigate()

    return (
        <div className={cardClassName}>
            <div 
            className={styles.image}
            style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${images[0]})`}}
            onClick={()=>{
                
                router(ITEM_ROUTE + '/' + item.id, { replace: false })
            }}
            ></div>
            <div className={styles.content}>

                <h2 className={styles.title}>{item.name}</h2>
                <div className={styles.price}>{item.price} рублей</div>

                <div className={styles.textbox}>
                    <div className={styles.text}>{item.description}</div>
                </div>
                
                <div className={styles.button}
                onClick={()=>{
                    
                    router(ITEM_ROUTE + '/' + item.id, { replace: false })
                }}
                >Подробнее</div>
            </div>


        </div>
    );
};

export default Card;