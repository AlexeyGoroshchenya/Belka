import React, { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Slider.module.css'
import Card from '../Card/Card';
import ChangePageButtons from '../UI/ChangePageButtons/ChangePageButtons';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';
import { GALLERY_ROUTE } from '../../utils/consts';
import { useInView } from 'react-intersection-observer';
import first from './slides/studio-ghibli-hd-wallpapers-3.jpg'
import second from './slides/studio-ghibli-hd-wallpapers-5.png'
import third from './slides/studio-ghibli-hd-wallpapers-6.png'
import four from './slides/studio-ghibli-hd-wallpapers-13.png'

import { register } from 'swiper/element/bundle';

register();

const Slider = observer(() => {



    const { devices } = useContext(Context)
    const router = useNavigate()
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
        initialInView: false,
        triggerOnce: true,
    });

    console.log(inView);

    const changePage = (increase) => {

        let pages = Math.ceil(devices.totalCount / devices.limit)

        if (increase) {
            if (devices.page + 1 <= pages) {
                devices.setPage(devices.page + 1)
            } else { devices.setPage(1) }
        } else {
            if (devices.page - 1 > 0) {
                devices.setPage(devices.page - 1)
            } else { devices.setPage(pages) }
        }
        console.log(devices.page);
    }

    const prevPage = () => {
        changePage(false)
    }

    const nextPage = () => {
        changePage(true)
    }

    const goTo = () => {
        router(GALLERY_ROUTE, { replace: false })
    }

    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [swiper, progress] = e.detail;
            // console.log(e);
        });

        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            console.log('slide changed');
        });
    }, []);


    return (
        <section ref={ref} id='slider' className={inView ? styles.slider + ' visibleSection' : styles.slider + ' hiddenSection'}>
            <swiper-container className={styles.content}

                ref={swiperElRef}
                slides-per-view="1"
                speed="500"
                loop="true"
                effect="fade"
                navigation="true"
                pagination="true"
                parallax="true"
                // fadeEffect='crossFade'
                // css-mode="true"
            // autoplay={true}
            >
                <swiper-slide className={styles.slide}>

                    <div className={styles.slideContent}
                        style={{ backgroundImage: `url(${first})` }}
                    >

                        <div className={styles.title} data-swiper-parallax="-100" data-swiper-parallax-opacity="0">
                            Slide 1
                        </div>
                        <div className={styles.subtitle} data-swiper-parallax="-300" data-swiper-parallax-opacity="0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium, corporis laudantium cupiditate minus omnis dolorum. Esse molestias ex facere qui, impedit pariatur, laudantium debitis unde suscipit distinctio similique sequi.
                        </div>
                        <div className={styles.button} data-swiper-parallax="-600" data-swiper-parallax-opacity="0">
                            Slide 1
                        </div>

                    </div>

                </swiper-slide>
                <swiper-slide className={styles.slide}>

                    <div className={styles.slideContent}
                        style={{ backgroundImage: `url(${second})` }}>
                        <div className={styles.title} data-swiper-parallax="-100" data-swiper-parallax-opacity="0">
                            Slide 2
                        </div>
                        <div className={styles.subtitle} data-swiper-parallax="-300" data-swiper-parallax-opacity="0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium, corporis laudantium cupiditate minus omnis dolorum. Esse molestias ex facere qui, impedit pariatur, laudantium debitis unde suscipit distinctio similique sequi.
                        </div>
                        <div className={styles.button} data-swiper-parallax="-600" data-swiper-parallax-opacity="0">
                            Slide 2
                        </div>
                    </div>

                </swiper-slide>
                <swiper-slide className={styles.slide}>

                    <div className={styles.slideContent}
                        style={{ backgroundImage: `url(${third})` }}>
                        <div className={styles.title} data-swiper-parallax="-100" data-swiper-parallax-opacity="0">
                            Slide 3
                        </div>
                        <div className={styles.subtitle} data-swiper-parallax="-300" data-swiper-parallax-opacity="0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium, corporis laudantium cupiditate minus omnis dolorum. Esse molestias ex facere qui, impedit pariatur, laudantium debitis unde suscipit distinctio similique sequi.
                        </div>
                        <div className={styles.button} data-swiper-parallax="-600" data-swiper-parallax-opacity="0">
                            Slide 3
                        </div>
                    </div>

                </swiper-slide>
                <swiper-slide className={styles.slide}>

                    <div className={styles.slideContent}
                        style={{ backgroundImage: `url(${four})` }}>
                        <div className={styles.title} data-swiper-parallax="-100" data-swiper-parallax-opacity="0">
                            Slide 4
                        </div>
                        <div className={styles.subtitle} data-swiper-parallax="-300" data-swiper-parallax-opacity="0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium, corporis laudantium cupiditate minus omnis dolorum. Esse molestias ex facere qui, impedit pariatur, laudantium debitis unde suscipit distinctio similique sequi.
                        </div>
                        <div className={styles.button} data-swiper-parallax="-600" data-swiper-parallax-opacity="0">
                            Slide 4
                        </div>
                    </div>

                </swiper-slide>

            </swiper-container>

        </section>
    );


    // return (
    //     <section ref={ref} id='slider' className={inView? styles.slider + ' visibleSection':styles.slider + ' hiddenSection'}>
    //         <div className={styles.title + ' sectionTitle'}>
    //             Новая коллекция
    //         </div>

    //         <div className={styles.content + ' sectionText'}>
    //             {

    //                 <div className={styles.body} >
    //                     {
    //                         devices.devices.map(slide => 
    //                             <Card key={slide.id} item={slide} slider={true} />
    //                         )
    //                     }


    //                 </div>

    //             }

    //         </div>


    //         <ChangePageButtons prevPage={prevPage} goTo={goTo} nextPage={nextPage} />



    //     </section>
    // );
});

export default Slider;