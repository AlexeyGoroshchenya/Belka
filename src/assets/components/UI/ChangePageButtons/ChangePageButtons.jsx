import React from 'react';
import styles from './ChangePageButtons.module.css'
import { isMobile } from '../../../utils/helpers';

const ChangePageButtons = ({ prevPage, goTo, nextPage }) => {


    return (
        <div className={styles.buttons}>

            {isMobile.any() ?
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"  
                onClick={prevPage}>
                <circle cx="29" cy="29" r="28" transform="rotate(180 29 29)" strokeWidth="2"/>
                <path d="M19.5858 27.5858C18.8047 28.3668 18.8047 29.6332 19.5858 30.4142L32.3137 43.1421C33.0948 43.9232 34.3611 43.9232 35.1421 43.1421C35.9232 42.3611 35.9232 41.0948 35.1421 40.3137L23.8284 29L35.1421 17.6863C35.9232 16.9052 35.9232 15.6389 35.1421 14.8579C34.3611 14.0768 33.0948 14.0768 32.3137 14.8579L19.5858 27.5858ZM24 27L21 27L21 31L24 31L24 27Z" />
                </svg>
                :
                <div className={styles.button + ' button'}
                    onClick={prevPage}>Назад</div>
            }

            <div className={styles.button + ' button'}
                onClick={goTo}>Смотреть все</div>

            {isMobile.any() ?
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" 
                onClick={nextPage}>
                <circle cx="29" cy="29" r="28" transform="rotate(180 29 29)"  strokeWidth="2"/>
                <path d="M19.5858 27.5858C18.8047 28.3668 18.8047 29.6332 19.5858 30.4142L32.3137 43.1421C33.0948 43.9232 34.3611 43.9232 35.1421 43.1421C35.9232 42.3611 35.9232 41.0948 35.1421 40.3137L23.8284 29L35.1421 17.6863C35.9232 16.9052 35.9232 15.6389 35.1421 14.8579C34.3611 14.0768 33.0948 14.0768 32.3137 14.8579L19.5858 27.5858ZM24 27L21 27L21 31L24 31L24 27Z" />
                </svg>
                :
                <div className={styles.button + ' button'}
                    onClick={nextPage}>Вперед </div>
            }





        </div>
    );
};

export default ChangePageButtons;