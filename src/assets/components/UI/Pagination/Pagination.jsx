import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../..';
import styles from './Pagination.module.css'

const Pagination = observer(({rows}) => {

    const {devices} = useContext(Context)
    

    
    const pages = []

    const pagesCount = Math.ceil(devices.totalCount/ (devices.limit*rows))

         for (let i = 0; i < pagesCount; i++) {

            pages.push(i + 1)
        
    }


   


    return (
        <div className={styles.body}>
            {pages.map(page=>

            <div key={'page ' + page}
            
            onClick={(e)=>{
                devices.setPage(page)
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
             }}
             

            
            
            className={devices.page !== page? styles.item: styles.item  + ' ' + styles.active}>{page}</div>
            )

            }
            
        </div>
    );
})

export default Pagination;