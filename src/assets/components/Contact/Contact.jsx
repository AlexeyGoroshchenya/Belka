import React, { useEffect, useRef } from 'react';
import styles from './Contact.module.css'

const Contact = ({scroll}) => {
    const contactRef = useRef()

    useEffect(()=>{
        scroll.setScrollBorders(prev=>[...prev, {id: contactRef.current.attributes.id.value, offset: contactRef.current.offsetTop}])
console.log( scroll.scrollBorders)
    }, [])
    
    return (
        <section ref={contactRef} id='contact' className={styles.body}>
            <div className={styles.image}>
                <img loading='lazy' src={`${process.env.PUBLIC_URL}/images/content/8.webp`} alt="" />


            </div>
            <div className={styles.desc}>
                <div className={styles.content}>

                    <div className={styles.title}>
                        Свяжитесь со мной


                    </div>
                    <div className={styles.phone}>

                        <div className={styles.subtitle}>

                            Позвонить

                        </div>
                        <div className={styles.text}>

                            +375298621966

                        </div>


                    </div>
                    <div className={styles.socials}>
                        <div className={styles.subtitle}>

                            Написать

                        </div>
                        <div className={styles.text}>

                            @dfgdfgfdgfg

                        </div>


                    </div>


                </div>


            </div>


        </section>
    );
};

export default Contact;