import React, { useState } from 'react';
import styles from './Admin.module.css';

const AdminInput = ({str, state, setState, fn}) => {



    return (


            <div className={styles.row}>
                <input type="text"
                    placeholder={str}
                    value={state}
                    onChange={(e) => {
                        setState(e.target.value)
                    }}
                />
                <div className={styles.button + ' button'}
                    onClick={fn}
                >{str}</div>
            </div>

 
    );
};

export default AdminInput;