import React, { useState } from 'react';
import styles from './Admin.module.css';

const AdminInput = ({children,  str, state, setState, fn,  }) => {

    const [hidden, setHidden] = useState(true)

    return (
        <>
            <div className={styles.titleRow}>
                <div className="admin__title">{children}</div>
                <div className={styles.unHide}
                    onClick={() => { setHidden(prev=> setHidden(!prev)) }}>+</div>
            </div>
            <div className={hidden ? styles.hidden : styles.row}>
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
        </>

    );
};

export default AdminInput;