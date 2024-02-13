import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../..';
import styles from './Pagination.module.css'

import titlePattern from "../../../images/titlePattern.svg";
import titlePatternSecond from "../../../images/titlePattern2.svg";

const Pagination = observer(({rows}) => {

    const {devices} = useContext(Context)
    

    
    const pages = []

    const pagesCount = Math.ceil(devices.totalCount/ (devices.limit*rows))

         for (let i = 0; i < pagesCount; i++) {

            pages.push(i + 1)
        
    }


   


    return (
        <div className={styles.body}>

                <div className={styles.decor + ' opacity'}>
                <img src={titlePattern} alt="" />
                </div>

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

            <div className={styles.decor + ' opacity'}>
                <img src={titlePatternSecond} alt="" />
                </div>
            
        </div>
    );
})

export default Pagination;