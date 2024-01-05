import React from 'react';
import styles from './Contact.module.css'

const Contact = React.memo(() => {
    
console.log('contact rerender');
 
    
    return (
        <section id='contact' className={styles.contact}>
            <div className={styles.body}>
                 <div className={styles.image}>
                <img loading='lazy' src={`${process.env.PUBLIC_URL}/images/wallpapers/contact.webp`} alt="" />


            </div>
            <div className={styles.desc}>
                <div className={styles.content}>

                    <div className={styles.title + ' sectionTitle'}>
                        Свяжитесь со мной


                    </div>
                    <div className={styles.row}>

                        <a href='tel:+375298621966' className={styles.subtitle + ' sectionTitle'}>

                        <img src={`${process.env.PUBLIC_URL}/images/phone.svg`} alt="" />

                        </a>
                        <div className={styles.text  + ' sectionText'}>

                            +375298621966

                        </div>


                    </div>
                    <div className={styles.row}>
                        <a href='https://www.instagram.com/belka_jewelry/' target='blank' className={styles.subtitle  + ' sectionTitle'}>

                        <img src={`${process.env.PUBLIC_URL}/images/instagram.svg`} alt="" />

                        </a>
                        <div className={styles.text  + ' sectionText'}>

                            @belka_jewelry

                        </div>


                    </div>


                </div>


            </div>

            </div>
           

        </section>
    );
});

export default Contact;