import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../../..';
import styles from './Pagination.module.css'

const Pagination = observer(() => {

    const {devices} = useContext(Context)

    const pagesCount = Math.ceil(devices.totalCount/ devices.limit)
    const pages = []

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)

        
        
    }


    return (
        <div className={styles.body}>
            {pages.map(page=>

            <div key={'page ' + page}
            
            onClick={(e)=>{
                devices.setPage(page)
                
             }}
             

            
            
            className={devices.page !== page? styles.item: styles.item  + ' ' + styles.active}>{page}</div>
            )

            }
            
        </div>
    );
})

export default Pagination;