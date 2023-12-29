import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/UI/Header/Header';
import { Context } from '../..';

import { observer } from 'mobx-react-lite';
import AdminInput from '../components/Admin/AdminInput';
import AddDeviceForm from '../components/Admin/AddDeviceForm';
import { createBrand, createType } from '../http/deviceApi';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import Loader from '../components/UI/Loader/Loader';
import OrdersList from '../components/Admin/OrdersList';
import { getAllOrders } from '../http/orderApi';

const Admin = observer(() => {

    const { user } = useContext(Context)
    const router = useNavigate()

    const [loading, setLoading] = useState(true)
    const [newType, setNewType] = useState('')
    const [newBrand, setNewBrand] = useState('')
    const [orders, setOrders] = useState([])
   

    const addType = () => {
        createType({ name: newType }).then((data) => {
            console.log(data);
        })
    }

    const addBrand = () => {
        createBrand({ name: newBrand }).then((data) => {
            console.log(data);
        })
    }



    const redirect = () => {
        router(LOGIN_ROUTE, { replace: true })
    }

    useEffect(() => {
        console.log(user.isAuth);
        console.log(user.user);
        if (!user.isAuth || user.user?.role !== 'ADMIN') {

            redirect()

        } else {

            getAllOrders().then((data)=>{
                setOrders(data)
                
                setLoading(false)
              })



            
        }

    }, [user.isAuth])



    if (loading) {

        return <Loader />
    }


    return (

        <div className='App admin'>

            <Header />
            <div className='admin__body'>

                <div className="admine__block">
                    <OrdersList orders={orders} > Список заказов </OrdersList>
                </div>


                <div className="admine__block">
                    <AddDeviceForm > Добавить новый предмет </AddDeviceForm>
                </div>

                <div className="admine__block">
                    <AdminInput str="Добавить тип" state={newType} setState={setNewType} fn={addType} >Добавить новый тип предмета</AdminInput>
                </div>

                <div className="admine__block">
                    <AdminInput str="Добавить бренд" state={newBrand} setState={setNewBrand} fn={addBrand} >Добавить новый бренд</AdminInput>
                </div>


            </div>
        </div>


    );
})
export default Admin;