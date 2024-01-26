import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Slider.module.css'
import Card from '../Card/Card';
import ChangePageButtons from '../UI/ChangePageButtons/ChangePageButtons';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';
import { GALLERY_ROUTE } from '../../utils/consts';
import { useInView } from 'react-intersection-observer';

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

const Slider = observer(() => {

    

    const {devices} = useContext(Context)
    const router = useNavigate()
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
        initialInView: false,
        triggerOnce: true,
      });
   
      console.log(inView);

    const changePage = (increase)=>{

        let pages = Math.ceil(devices.totalCount/devices.limit)

        if(increase){
            if(devices.page + 1 <= pages) {
                            devices.setPage(devices.page + 1)
                        } else {devices.setPage(1)}
        } else {
            if(devices.page - 1 > 0) { 
                devices.setPage(devices.page - 1)
            } else {devices.setPage(pages) }
        }
        console.log(devices.page);
    }

    const prevPage = ()=>{
        changePage(false)
    }

    const nextPage = ()=>{
        changePage(true)
    }

    const goTo = ()=>{
        router(GALLERY_ROUTE, { replace: false })
    }


    return (
        <section ref={ref} id='slider' className={inView? styles.slider + ' visibleSection':styles.slider + ' hiddenSection'}>
            <div className={styles.title + ' sectionTitle'}>
                Новая коллекция
            </div>

            <div className={styles.content + ' sectionText'}>
                {
                
                    <div className={styles.body} >
                        {
                            devices.devices.map(slide => 
                                <Card key={slide.id} item={slide} slider={true} />
                            )
                        }


                    </div>

                }

            </div>

            
            <ChangePageButtons prevPage={prevPage} goTo={goTo} nextPage={nextPage} />



        </section>
    );
});

export default Slider;