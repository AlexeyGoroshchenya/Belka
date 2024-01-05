import React, { useContext, useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import { useParams } from 'react-router-dom';
import { Context } from '../..';
import Header from '../components/UI/Header/Header';
import ChangePageButtons from '../components/UI/ChangePageButtons/ChangePageButtons';
import { checkLocalBasket, fetchDevices, fetchOneDevice } from '../http/deviceApi';
import { useNavigate } from 'react-router-dom';
import { GALLERY_ROUTE, PRODUCT_ROUTE } from '../utils/consts';


const ItemPage = () => {



    let id = useParams().id

    const [item, setItem] = useState({})
    const [inWish, setInWish] = useState(false)
    const [buttonIndexes, setButtonIndexes] = useState([0, 1])
    const [slide, setSlide] = useState(0)

    const { devices } = useContext(Context)
    const router = useNavigate()

    console.log(id);

        const getButtonsInd = () => {
            let prev = parseFloat(id) - 1 > 0 ? parseFloat(id) - 1 : devices.totalCount
            let next = parseFloat(id) + 1 <= devices.totalCount ? parseFloat(id) + 1 : 1
            setButtonIndexes([prev, next])
            
        }

  

    useEffect(() => {
        fetchOneDevice(id).then((data) => {

            setItem(data);

        })

        if (devices.totalCount === 0) {
            fetchDevices(null, null, 1, 1).then((data) => {

                devices.setTotalCount(data.count)
                getButtonsInd()
            })
        } else {
            getButtonsInd()
        }

        checkLocalBasket(id).then((data) => {
            if (data) {
                setInWish(true)
            }else{
                setInWish(false)
            }
            console.log(data)
        })

    }, [id])

    useEffect(() => {

        getButtonsInd()
        
    }, [devices.totalCount])



    const prevPage = ()=>{
        setSlide(0)
        router(PRODUCT_ROUTE + '/' + buttonIndexes[0], { replace: false })
        
    }

    const nextPage = ()=>{
        setSlide(0)
        router(PRODUCT_ROUTE + '/' + buttonIndexes[1], { replace: false })
    }

    const goTo = ()=>{
        
        router(GALLERY_ROUTE, { replace: false })
    }


    return (
        <div className='App' onClick={() => {
            
        }}>
            <Header />
            <ChangePageButtons prevPage={prevPage} goTo={goTo} nextPage={nextPage} />
            <Product item={item} inWish={inWish} setInWish={setInWish} slide={slide} setSlide={setSlide} />
        </div>
    );
};

export default ItemPage;
