import React, { useContext, useEffect, useState } from 'react';

import db from '../../assets/data/db.json'

import Slider from '../components/Slider/Slider';
import Cover from '../components/Cover/Cover';
import Brand from '../components/Brand/Brand';
import FAQs from '../components/FAQs/FAQs';
import Contact from '../components/Contact/Contact';
import Header from '../components/UI/Header/Header';
import { Context } from '../..';
import { fetchDevices } from '../http/deviceApi';
import { observer } from 'mobx-react-lite';

const Home = observer(() => {

  const {devices} = useContext(Context)

  

  useEffect(() => {

    let numberColumns = Math.floor(window.innerWidth/(320 + 50))

    devices.setLimit(numberColumns)


    fetchDevices(null, null, 1, devices.limit).then((data)=>{
      devices.setDevices(data.rows);
      console.log(data);
      devices.setTotalCount(data.count)
    })

  }, [])

  useEffect(() => {

    fetchDevices(devices.selectedType.id, devices.selectedBrand.id, devices.page, devices.limit).then((data)=>{
      devices.setDevices(data.rows);
      // console.log(data);
       devices.setTotalCount(data.count)
    })


  }, [devices.page])





  return (
    <div className="App hidden-header">

   
          <Header />
          <Cover  />
          <Brand />
          <Slider />
          <FAQs />
          <Contact />

    </div>
  )
})

export default Home;