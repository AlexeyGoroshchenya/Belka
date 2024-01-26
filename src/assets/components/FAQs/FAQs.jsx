import React from 'react';
import styles from './FAQs.module.css'
import { useInView } from 'react-intersection-observer';

const FAQs = React.memo(() => {

    
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
        initialInView: false,
        triggerOnce: true,
      });
   
      console.log(inView);
    // useEffect(() => {
    //     scroll.setScrollBorders(prev => [...prev, { id: faqsRef.current.attributes.id.value, offset: faqsRef.current.offsetTop }])
    //     console.log(scroll.scrollBorders)
    // }, [])

    return (
        <section ref={ref} id='faqs' className={inView? styles.faqs + ' visibleSection':styles.faqs + ' hiddenSection'}>

            <div className={styles.body}>

                <div className={styles.title + ' sectionTitle'}>
                    Вопросы
                </div>

                <div className={styles.questions + ' sectionText'}>

                    <div className={styles.question}>
                        <p><span>Как купить?</span></p>
                        <div className={styles.text}>
                            
                            <p>Вы можете оформить заказ здесь на сайте. Я Вам перезвоню и уточню наличие, сроки и все остальные детали.</p>
                            <p>Если Вы не можете приехать и посмотреть на изделие лично, сделаю фото и видео.</p>
                            <p>Когда все будет согласовано, я Вам сообщу какие есть варианты доставки в Вашем случае.</p>
                        </div>
                    </div>
                    <div className={styles.question}>
                        <p><span>Зачем регистрироваться на сайте?</span></p>
                        <div className={styles.text}>
                            

                            <p>Регистрироваться не обязательно. Посмотреть и заказать можно и без регистрации</p>
                            <p>Регистрация открывает некоторые дополнительные функции, такие, например, как накопительная скидка.</p>
                            <p>Если вы зарегистрируетесь, обещаю не надоедать Вам никакими рекламными рассылками.</p>
                        </div>
                    </div>
                    <div className={styles.question}>
                        <p><span>Где посмотреть живьем?</span></p>
                        <div className={styles.text}>
                            

                            <p>Я периодически участвую в выставках в Минске. Это хорошая возможность посмотреть и примерять все интересующие укашения.</p>
                            <p>Если у Вас намечается событие и ждать выставки совсем не получается, свяжитесь со мной и мы постараемся что-то для Вас придумать.</p>
                        </div>
                    </div>
                    
                </div>
            

        

            </div >

        </section >
    );
});

export default FAQs;