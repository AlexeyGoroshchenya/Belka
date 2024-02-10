import React, { useEffect, useState } from 'react';
import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/consts';
import { checkLocalBasket } from '../../http/deviceApi';
import { changeBasket } from '../../utils/helpers';

const Card = ({ item, slider = false }) => {

    const images = item.img.split(',')


    const [isWish, setIsWish] = useState(false)

    let cardClassName = slider ? styles.item + ' slider__item' : styles.item

    const router = useNavigate()


    useEffect(()=>{
        checkLocalBasket(item.id).then((data) => {
            if (data) {
                setIsWish(true)
            }else{
                setIsWish(false)
            }
        })
    },[])

    

    return (
        <div className={cardClassName}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${process.env.PUBLIC_API_URL}/${images[0]})` }}
                onClick={() => {

                    router(PRODUCT_ROUTE + '/' + item.id, { replace: false })
                }}
            ></div>
            <div className={styles.content}>

                <h2 className={styles.title}>{item.name}</h2>
                <div className={styles.pricebox}>
                    <img src={`${process.env.ASSET_PREFIX}/images/${!isWish?'wish':'wish_done'}.svg`}
                     alt=""
                     onClick={()=>{
                        changeBasket(item, setIsWish)
                        
                        }} />
                    <div className={styles.price}>{item.price} рублей</div>
                </div>
                

                <div className={styles.textbox}>
                    <div className={styles.text}>{item.description}</div>
                </div>

                <div className={styles.button}
                    onClick={() => {

                        router(PRODUCT_ROUTE + '/' + item.id, { replace: false })
                    }}
                >Подробнее</div>
            </div>


        </div>
    );
};

export default Card;