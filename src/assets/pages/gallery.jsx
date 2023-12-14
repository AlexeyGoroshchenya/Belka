import React, { useContext, useEffect, useState } from 'react';

import Header from '../components/UI/Header/Header';
import Search from '../components/UI/Search/Search';
import Store from '../components/Store/Store';
import { Context } from '../..';
import TypeBar from '../components/UI/TypeBar/TypeBar';
import { observer } from 'mobx-react-lite';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi';
import Pagination from '../components/UI/Pagination/Pagination';

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

    fetchDevices(null, null, 1, devices.limit).then((data)=>{
      devices.setDevices(data.rows);
      console.log(data);
      devices.setTotalCount(data.count)
    })

    // setGoods(devices.devices)

    

  }, [])

  useEffect(() => {


    fetchDevices(devices.selectedType.id, devices.selectedBrand.id, devices.page, devices.limit).then((data)=>{
      devices.setDevices(data.rows);
      // console.log(data);
       devices.setTotalCount(data.count)
    })


  }, [devices.page, devices.selectedBrand, devices.selectedType])

    return (
        <div className="App">
            <Header />
            <TypeBar />
          {/* <Search filter={filter} setFilter={setFilter} /> */}
        
          <Store goods={devices.devices} />
          <Pagination/>
        </div>
    )
})

export default Gallery;