import React, { useContext, useEffect, useState } from 'react';

import Header from '../components/UI/Header/Header';
import Search from '../components/UI/Search/Search';
import Store from '../components/Store/Store';
import { Context } from '../..';
import TypeBar from '../components/UI/TypeBar/TypeBar';
import { observer } from 'mobx-react-lite';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi';
import Pagination from '../components/UI/Pagination/Pagination';
import Loader from '../components/UI/Loader/Loader';

const Gallery = observer(() => {

  const {devices} = useContext(Context)
  
  const [loading, setLoading]= useState(true)
    const [rows, setRows] = useState(2)
    
    // const [filter, setFilter] = useState('')

    
  useEffect(() => {

    let numberColumns = Math.floor(window.innerWidth/(320 + 20))
    numberColumns = numberColumns === 0? 1 : numberColumns
    devices.setLimit(numberColumns)
    console.log(numberColumns);


    fetchTypes().then((data)=>{
      devices.setTypes(data);
    })

    fetchBrands().then((data)=>{
      devices.setBrands(data);
    })

    fetchDevices(null, null, 1, devices.limit*rows).then((data)=>{
      devices.setDevices(data.rows);
      console.log(data);
      devices.setTotalCount(data.count)
      setLoading(false)

    })

    // setGoods(devices.devices)

    

  }, [])

  useEffect(() => {


    fetchDevices(devices.selectedType.id, devices.selectedBrand.id, devices.page, devices.limit*rows).then((data)=>{
      devices.setDevices(data.rows);
      // console.log(data);
       devices.setTotalCount(data.count)
    })


  }, [devices.page, devices.selectedBrand, devices.selectedType])


  if(loading) {

    return <Loader/>
   }

    return (
        <div className="App">

          
            <Header />
            <TypeBar />


          {/* <Search filter={filter} setFilter={setFilter} /> */}
        
          <Store goods={devices.devices} />
          <Pagination rows={rows}/>
        </div>
    )
})

export default Gallery;