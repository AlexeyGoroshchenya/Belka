import React, { useContext, useEffect, useState } from 'react';

import Header from '../components/UI/Header/Header';
import Search from '../components/UI/Search/Search';
import Store from '../components/Store/Store';
import { Context } from '../..';
import TypeBar from '../components/UI/TypeBar/TypeBar';
import { observer } from 'mobx-react-lite';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi';

const Gallery = observer(() => {

  const {devices} = useContext(Context)
  

    // const [goods, setGoods] = useState([])
    
    // const [filter, setFilter] = useState('')

    
  useEffect(() => {
    fetchTypes().then((data)=>{
      devices.setTypes(data);
    })

    fetchBrands().then((data)=>{
      devices.setBrands(data);
    })

    fetchDevices().then((data)=>{
      devices.setDevices(data.rows);
      console.log(data);
    })

    // setGoods(devices.devices)

    

  }, [])

    return (
        <div className="App">
            <Header />
            <TypeBar />
          {/* <Search filter={filter} setFilter={setFilter} /> */}
        
          <Store goods={devices.devices} />
        </div>
    )
})

export default Gallery;