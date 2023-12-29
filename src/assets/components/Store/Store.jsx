import React from 'react';
import styles from './Store.module.css'
import Card from '../Card/Card';

const Store = ({goods = []}) => {

  
    return (
        <div className={styles.store}>
                 
                 
                  {goods.length > 0 ?
        goods.map(item =>

          <Card key={item.id} item={item} />
        ) :
        <p style={{textAlign: 'center', color: 'white', fontSize: '20px', padding: '50px', width: '100%'}}>Ничего не найдено</p>



      }
        </div>
    );
};

export default Store;