import React from 'react';
import styles from "./Cover.module.css";
import { useNavigate } from 'react-router-dom';
import { GALLERY_ROUTE } from '../../utils/consts';
import { isMobile } from '../../utils/helpers';

const Cover = React.memo(
    () => {

        let coverStyles = ''
        if(isMobile.any()){
            coverStyles = window.innerWidth < 900 ? styles.cover + ' ' + styles.small: styles.cover + ' ' + styles.medium
        } else {
            coverStyles = window.innerWidth < 1500 ?  styles.cover + ' ' + styles.medium : styles.cover
        }

         
        
console.log(coverStyles);

        

        const router = useNavigate()




        return (
            <section id='cover' className={coverStyles}>
                <div className={styles.body}>
    
                <h1 className={styles.logo}>
                    Belka jewelry
                </h1>
                <div className={styles.slogan}>
                    Красота на каждый день
                </div>
                <div className={styles.button}
                onClick={()=> 
                    router(GALLERY_ROUTE, { replace: false })
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