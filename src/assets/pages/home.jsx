import React, { useContext, useEffect, useRef, useState } from 'react';

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


 
const [userIsActive, setUserIsActive] = useState(false)




  useEffect(() => {
    let numberColumns = Math.floor(document.body.clientWidth / (320 + 50))

    devices.setLimit(numberColumns)

    fetchDevices(null, null, 1, devices.limit).then((data) => {
      devices.setDevices(data.rows);
      
      devices.setTotalCount(data.count)
    })
    

    // window.addEventListener('pointermove', active);
    // window.addEventListener('keypress', active);
    // window.addEventListener('click', active);

    // return () => {
    //   window.removeEventListener('pointermove', active)
    //   window.removeEventListener('keypress', active)
    //   window.removeEventListener('click', active)
    // }
  }, [])



  useEffect(() => {

    fetchDevices(devices.selectedType.id, devices.selectedBrand.id, devices.page, devices.limit).then((data) => {
      devices.setDevices(data.rows);
      // console.log(data);
      devices.setTotalCount(data.count)
    })

  }, [devices.page])


{/* <SceenSaver /> */}



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