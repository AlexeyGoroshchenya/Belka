import React from 'react';
import styles from './Contact.module.css'
import { useInView } from 'react-intersection-observer';

const Contact = React.memo(() => {
    

const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
    initialInView: false,
    triggerOnce: true,
  });

  console.log(inView);
    
    return (
        <section ref={ref} id='contact' className={inView? styles.contact + ' visibleSection':styles.contact + ' hiddenSection'}>
            <div className={styles.body}>
                 <div className={styles.image}>
                <img loading='lazy' src={`${process.env.ASSET_PREFIX}/images/wallpapers/contact.webp`} alt="" />


            </div>
            <div className={styles.desc}>
                <div className={styles.content  + ' opacity'}>

                    <div className={styles.title + ' sectionTitle'}>
                        Свяжитесь со мной


                    </div>
                    <div className={styles.row}>

                        <a href='tel:+375298621966' className={styles.subtitle + ' sectionTitle'}>

                        <img src={`${process.env.ASSET_PREFIX}/images/phone.svg`} alt="" />

                        </a>
                        <div className={styles.text  + ' sectionText'}>

                            +375298621966

                        </div>


                    </div>
                    <div className={styles.row}>
                        <a href='https://www.instagram.com/belka_jewelry/' target='blank' className={styles.subtitle  + ' sectionTitle'}>

                        <img src={`${process.env.ASSET_PREFIX}/images/instagram.svg`} alt="" />

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