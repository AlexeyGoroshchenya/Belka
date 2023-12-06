import React, { useEffect, useRef } from 'react';
import styles from './Brand.module.css'

const Brand = ({scroll}) => {

    const brandRef = useRef()

    useEffect(()=>{
        scroll.setScrollBorders(prev=>[...prev, {id: brandRef.current.attributes.id.value, offset: brandRef.current.offsetTop}])
console.log( scroll.scrollBorders)
    }, [])

    return (
        <section id='brand' ref={brandRef} className={styles.body}>

            <div className={styles.desc}>
                <div className={styles.title}>
                    Каждый найдет тут что-то невероятное
                </div>
                <div className={styles.text}>
                    Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное. Каждый найдет тут что-то невероятное.
                </div>

            </div>

            <div className={styles.image}>
                <img src={`${process.env.PUBLIC_URL}/images/content/6.webp`} alt="" loading='lazy' />
            </div>



        </section>
    );
};

export default Brand;