import React, { useContext, useEffect, useState } from 'react';
import Item from '../components/Item/Item';
import { useParams } from 'react-router-dom';
import { Context } from '../..';
import Header from '../components/UI/Header/Header';
import { fetchOneDevice } from '../http/deviceApi';

const ItemPage = () => {

    let id = useParams().id

    const[item, setItem] = useState({})

    // const {devices} = useContext(Context)
useEffect(()=>{
    fetchOneDevice(id).then((data)=>{
        
        setItem(data);
      })
        
}, [])
    

    return (
        <div className='App' onClick={()=>{
            console.log(id);
        }}>
            <Header />
            <Item item={item}/>
        </div>
    );
};

export default ItemPage;
