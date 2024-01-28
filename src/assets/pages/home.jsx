import React, { useContext, useEffect, useRef, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer/legacy'

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
import SceenSaver from '../components/ScreenSaver/SceenSaver';

const Home = observer(() => {

  const { devices } = useContext(Context)

  const [activity, setActivity] = useState(true)
  const [count, setCount] = useState(0)
  const [remaining, setRemaining] = useState(0)

  const onIdle = () => {
    setActivity(false)
  }

  const onActive = () => {
    setActivity(true)
  }

  const onAction = () => {
    setCount(count + 1)
  }

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 60_000,
    throttle: 500
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  })
 


  useEffect(() => {
    let numberColumns = Math.floor(document.body.clientWidth / (320 + 50))

    devices.setLimit(numberColumns)

    fetchDevices(null, null, 1, devices.limit).then((data) => {
      devices.setDevices(data.rows);
      
      devices.setTotalCount(data.count)
    })

  }, [])



  useEffect(() => {

    fetchDevices(devices.selectedType.id, devices.selectedBrand.id, devices.page, devices.limit).then((data) => {
      devices.setDevices(data.rows);
      // console.log(data);
      devices.setTotalCount(data.count)
    })

  }, [devices.page])



if(!activity) return <SceenSaver />


  return (
    <div className="App hidden-header">
      <Header />
      <Cover />
      
        <Brand />
      
        <Slider />
      
        <FAQs />
            
        <Contact />
      

    </div>
  )
})

export default Home;