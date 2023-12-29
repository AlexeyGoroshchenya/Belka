import React from 'react';
import styles from './Brand.module.css'

const Brand = React.memo(() => {

    console.log('brand rerender');


    return (
        <section id='brand' className={styles.body}>

            <div className={styles.desc}>
                <div className={styles.title}>
                    Каждый найдет тут что-то невероятное
                </div>
                <div className={styles.text}>
                    Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное.
                </div>

            </div>

            <div className={styles.image}>
                <img src={`${process.env.PUBLIC_URL}/images/wallpapers/brand.webp`} alt="" loading='lazy' />
            </div>



        </section>
    );
});

export default Brand;