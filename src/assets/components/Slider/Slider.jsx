import React, { useEffect, useState } from 'react';
import styles from './Slider.module.css'
import Card from '../Card/Card';

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

const Slider = ({ goods=[] }) => {

    
console.log(goods);


    return (
        <section id='slider' className={styles.slider}>
            <div className={styles.title}>
                Новая коллекция
            </div>

            <div className={styles.content}>
                {
                
                    <div className={styles.body} >
                        {
                            goods.map(slide => 
                                <Card key={slide.id} item={slide} slider={true} />
                            )
                        }


                    </div>

                }

            </div>

            

            <div className={styles.buttons}>
                {/* <div className={styles.button + ' button'}>Назад</div> */}
                <div className={styles.button + ' button'}>Смотреть все</div>
                {/* <div className={styles.button + ' button'}>Вперед</div> */}




            </div>




        </section>
    );
};

export default Slider;