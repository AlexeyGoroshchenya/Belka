import React from 'react';
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.body}>
            <span className={styles.loader}></span>
        </div>
    );
};

export default Loader;