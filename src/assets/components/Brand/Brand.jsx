import React from 'react';
import styles from './Brand.module.css'
import { useInView } from 'react-intersection-observer';

import leftBottom from "../../images/leftBottom.svg";

const Brand = React.memo(() => {

    

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
        initialInView: false,
        triggerOnce: true,
        rootMargin: '50px 0px 0px 0px', 
      });
console.log(inView);

    return (
        <section ref={ref} id='brand' className={inView? styles.body + ' visibleSection':styles.body + ' hiddenSection'}>

            <div className={styles.desc  + ' opacity'}>
                <div className={styles.title + ' sectionTitle'}>
                    Каждый найдет тут что-то невероятное
                </div>
                <div className={styles.text + ' sectionText'}>
                    Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное.
                </div>


                <div className={styles.decor + ' opacity'}>
                <img src={leftBottom} alt="" />
                </div>
            </div>

            <div className={styles.image}>
                <img src={`${process.env.ASSET_PREFIX}/images/wallpapers/brand.webp`} alt="" loading='lazy' />
            </div>

            

        </section>
    );
});

export default Brand;