import React, { useEffect, useState } from 'react';

import db from '../../assets/data/db.json'

import Slider from '../components/Slider/Slider';
import Cover from '../components/Cover/Cover';
import Brand from '../components/Brand/Brand';
import FAQs from '../components/FAQs/FAQs';
import Contact from '../components/Contact/Contact';

const Home = () => {

    
      // useMemo(()=>{
  //     let a = db.filter(item=> item.price < 50)
  // console.log(a);

  //   }, [])
  const [goods, setGoods] = useState([])
  
  const [started, setStarted] = useState(false)
  const [slides, setSlides] = useState([])
  const [slidesNumber, setSlidesNumber] = useState(0)
  const [scrollBorders, setScrollBorders] = useState([])


//   // 
// const minSwipeDistance = 10 

//   const [touchStart, setTouchStart] = useState(null)
//   const [touchEnd, setTouchEnd] = useState(null)
//   const [nextFrame, setNextFrame] = useState([])
  
  
//   const onTouchStart = (e) => {
//     // e.preventDefault()
//     setTouchEnd(null) 
//     setTouchStart(e.targetTouches[0].clientY)
//   }
  
//   const onTouchMove = (e) => {
//     // e.preventDefault()
//     setTouchEnd(e.targetTouches[0].clientY)
//   }
  
//   const onTouchEnd = (e) => {
//     // e.preventDefault()
//     if (!touchStart || !touchEnd) return
//     const distance = touchStart - touchEnd
//     const isUpSwipe = distance > minSwipeDistance
//     const isDownSwipe = distance < -minSwipeDistance
//     if (isUpSwipe) {
//       scrollToNextFrame(true)
    
//       console.log('swipe', 'Up')
//     }
//     if (isDownSwipe) {
//       scrollToNextFrame()
    
//       console.log('swipe', 'Down')
//     }
    
//   }

//   const scrollToNextFrame = (direction)=>{

//     if(scrollBorders.length === 0) return

//     let Y = window.scrollY

//     if(!direction && Y === 0) return

    

//     if(direction){
//       const next = scrollBorders.find(item => item.offset > Y)
//       if(next) setNextFrame(next)
      


//     } else {

//       const next = scrollBorders.filter(item => item.offset < Y)
//       console.log(next);
//       // const maxObject = next.reduce((prev, current) => prev.b > current.b ? prev : current, {});

//       const maxObject=next.reduce((prev,cur) => cur?.offset>prev.offset?cur:prev,{offset:-Infinity})
//       console.log(maxObject);

//       setNextFrame(maxObject)
//     }

//     console.log(nextFrame);
    
//     if(nextFrame.id){
      
//        document.querySelector(`#${nextFrame.id}`).scrollIntoView()//{ behavior: "smooth" }
// }

//   }
  // 


  const checkWindowWidtch = ()=>{
    if(window.innerWidth < 768){
      setSlidesNumber(1)
    } else if(window.innerWidth > 1200){
      setSlidesNumber(3)
    } else {setSlidesNumber(2)}
  }

  const getSlidesForRender = ()=>{
    let arr = []
    db.forEach((item, ind) => { if (ind < slidesNumber) arr.push(item) })
    setSlides(arr)
  }



  useEffect(() => {

    // document.querySelectorAll('section').forEach((el)=>{
    //   setScrollBorders(prev=>[...prev, {id: el.attributes.id.value, offset: el.offsetTop}])
      
    // })



    // scrollToNextFrame()
    checkWindowWidtch()
    // fetch('https://jsonplaceholder.typicode.com/posts/')
    //   .then(response => response.json())
    //   .then(json => setGoods(json))
    setGoods(db)

    

  }, [])

  useEffect(() => {
    getSlidesForRender()
    

  }, [slidesNumber])

  return (
    <div className="App hidden-header"
    // onPointerMove={(e) => console.log(e)}
    // onPointerDown={(e) => console.log(e)}
    // onPointerUp={(e) => console.log('onPointerUp')}

      // onTouchStart={e=>onTouchStart(e)}
      // onTouchMove={e=>onTouchMove(e)}
      // onTouchEnd={e=> onTouchEnd(e)}
    >

   
     
          <Cover started={started} setStarted={setStarted} scroll={{scrollBorders:scrollBorders, setScrollBorders:setScrollBorders}} />
          <Brand scroll={{scrollBorders:scrollBorders, setScrollBorders:setScrollBorders}}/>
          <Slider goods={slides} number={3} />
          <FAQs scroll={{scrollBorders:scrollBorders, setScrollBorders:setScrollBorders}}/>
          <Contact scroll={{scrollBorders:scrollBorders, setScrollBorders:setScrollBorders}} />

    </div>
  )
};

export default Home;