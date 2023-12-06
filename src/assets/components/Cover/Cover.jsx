import React, { useEffect, useRef } from 'react';
import styles from "./Cover.module.css";
import { useNavigate } from 'react-router-dom';
import { GALLERY_ROUTE } from '../../utils/consts';

const Cover = React.memo(
    ({started, setStarted, scroll}) => {

        const coverRef = useRef()

        const router = useNavigate()

        useEffect(()=>{
            scroll.setScrollBorders(prev=>[...prev, {id: coverRef.current.attributes.id.value, offset: coverRef.current.offsetTop}])
    console.log( scroll.scrollBorders)
        }, [])


        return (
            <section id='cover' ref={coverRef} className={styles.cover}>
                <div className={styles.body}>
    
                <h1 className={styles.logo}>
                    Belka jewelry
                </h1>
                <div className={styles.slogan}>
                    Красота на каждый день
                </div>
                <div className={styles.button}
                onClick={()=> 
                    router(GALLERY_ROUTE, { replace: true })
                }
                >
                    Посмотреть красоту
                </div>
    
                
                </div>
            </section>
        );
    }
)

export default Cover;