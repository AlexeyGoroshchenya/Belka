import React from 'react';
import styles from './Search.module.css'

const Search = ({filter, setFilter}) => {

    return (
        <div className={styles.body}>
            <input type="text" 
            placeholder='Поиск'
            value={filter}
            className={styles.input}
            onChange={(e)=>{
                setFilter(e.target.value)
                console.log(filter);
            }}/>
        </div>
    );
};

export default Search;