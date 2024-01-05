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

const Home = observer(() => {

  const { devices } = useContext(Context)

  const brandRef = useRef(null)
  const sliderRef = useRef(null)
  const faqsRef = useRef(null)
  const contactsRef = useRef(null)

  const observer = useRef()




  useEffect(() => {

    let numberColumns = Math.floor(document.body.clientWidth / (320 + 50))



    devices.setLimit(numberColumns)


    fetchDevices(null, null, 1, devices.limit).then((data) => {
      devices.setDevices(data.rows);
      console.log(data);
      devices.setTotalCount(data.count)
    })





  }, [])

  useEffect(() => {

    const options = {
      rootMargin: "-20px",
      threshold: 0.5,
    }

    const callback = (entries) => {

      entries.forEach((entry) => {

        console.log(entry)


       if( entry.target.className === 'visibleSection') return

        if (entry.isIntersecting) {
          entry.target.className = 'visibleSection'
          console.log(entry.isIntersecting)

        }
      })







    }


    observer.current = new IntersectionObserver(callback, options)


    observer.current.observe(brandRef.current)
    observer.current.observe(sliderRef.current)
    observer.current.observe(faqsRef.current)
    observer.current.observe(contactsRef.current)

  }, [])

  useEffect(() => {

    fetchDevices(devices.selectedType.id, devices.selectedBrand.id, devices.page, devices.limit).then((data) => {
      devices.setDevices(data.rows);
      // console.log(data);
      devices.setTotalCount(data.count)
    })


  }, [devices.page])





  return (
    <div className="App hidden-header">
      <Header />
      <Cover />
      <div ref={brandRef} className='hiddenSection'>
        <Brand />
      </div>
      <div ref={sliderRef} className='hiddenSection'>
        <Slider />
      </div>
      <div ref={faqsRef} className='hiddenSection'>
        <FAQs />
      </div>
      <div ref={contactsRef} className='hiddenSection'>
        <Contact />
      </div>

    </div>
  )
})

export default Home;