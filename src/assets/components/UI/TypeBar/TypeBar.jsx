import React, { useContext } from 'react';
import styles from "./TypeBar.module.css"
import { Context } from '../../../..';
import { observer } from 'mobx-react-lite';

const TypeBar = observer (() => {

    const {devices} = useContext(Context)



    return (
        <div className={styles.body}>


            {devices.types.map(type =>

                
                <div key={type.id}
                 
                 
                 onClick={(e)=>{
                    devices.setSelectedType(type)
                    console.log(devices.selectedType);
                    
                 }}
                 

                 className={devices.selectedType.id !== type.id? styles.item: styles.item + ' ' + styles.active}
                 >{type.name}</div>


            )}

            <div 
                 
                 
                 onClick={(e)=>{
                    devices.setSelectedType({})
                    console.log(devices.selectedType);
                    
                 }}
                 

                 className={styles.item}
                 >Все</div>

        </div>
    );
}
)

export default TypeBar;