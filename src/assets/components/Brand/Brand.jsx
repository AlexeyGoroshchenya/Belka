import React from 'react';
import styles from './Brand.module.css'
import { useInView } from 'react-intersection-observer';

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

            <div className={styles.desc}>
                <div className={styles.title + ' sectionTitle'}>
                    Каждый найдет тут что-то невероятное
                </div>
                <div className={styles.text + ' sectionText'}>
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