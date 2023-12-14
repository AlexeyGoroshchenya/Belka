import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/UI/Header/Header';
import { Context } from '../..';

import { observer } from 'mobx-react-lite';
import AdminInput from '../components/Admin/AdminInput';
import AddDeviceForm from '../components/Admin/AddDeviceForm';
import { createBrand, createType } from '../http/deviceApi';

const Admin = observer(() => {

    const { user } = useContext(Context)

    const [newType, setNewType] = useState('')
    const [newBrand, setNewBrand] = useState('')

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



    useEffect(() => {
        console.log(user.isAuth);
        if (user.isAuth) {
            if (user.user.role === 'ADMIN') {
                console.log('hello');
            } else {
                console.log('go away');
            }
        }

    }, [user])






    return (

        <div className='App admin'>

            <Header />
            <div className='admin__body'>

            <AdminInput str="Добавить тип" state={newType} setState={setNewType} fn={addType} />
            <AdminInput str="Добавить бренд" state={newBrand} setState={setNewBrand} fn={addBrand} />
            <AddDeviceForm/>


     






            </div>
        </div>


    );
})
export default Admin;