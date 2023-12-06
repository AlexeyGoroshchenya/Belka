import React from 'react';
import styles from './Card.module.css'

const Card = ({item, slider = false} ) => {

let cardClassName = slider? styles.item + ' slider__item': styles.item


    return (
        <div className={cardClassName}>
            <div className={styles.image} style={{backgroundImage: 'url(/images/content/' + item.image + ')'}}>


            </div>
            <div className={styles.content + ' card__content'}>

                <h2 className={styles.title}>{item.name}</h2>
                <div className={styles.price}>{item.price} рублей</div>
                <div className={styles.text  + ' card__text'}>{item.desc}</div>
                <div className={styles.button + ' button'}>Заказать</div>
            </div>


        </div>
    );
};

export default Card;