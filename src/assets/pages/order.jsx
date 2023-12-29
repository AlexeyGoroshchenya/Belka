import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/UI/Header/Header';
import OrderForm from '../components/Order/orderForm';
import { Context } from '../..';
import { createOrder } from '../http/orderApi';
import Loader from '../components/UI/Loader/Loader';

const Order = () => {

    const { order, user } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [userName, setUserName] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [note, setNote] = useState('')

    const [orderCreated, setOrderCreated] = useState(false)

    const changeBasket = () => {
        let basket = JSON.parse(localStorage.basket)

        order.order.forEach(item => {
            if (basket.find(el => el.id === item.id)) {
            let index = basket.findIndex(el => el.id === item.id)
            basket.splice(index, 1)
            

        }
        })
        localStorage.setItem('basket', JSON.stringify(basket))
    }

    const addOrder = () => {

        console.log(user.isAuth);

        setLoading(true)

        try {
            const orderedDevices = order.order.map(item => {
                return item = { name: item.name, price: item.price, id: item.id }
            })

            createOrder({ phone: parseFloat(userPhone),
                 name: userName,
                  devices: JSON.stringify(orderedDevices),
                   auth: user.isAuth,
                   note: note})
                .then((data) => {
                if (data === 'ok') {
                    setOrderCreated(true)
                    changeBasket()
                }
            })
        } catch (err) {
            console.log(err);
            return (
                <div className='App'>
                    <Header />
                    <div>Что-то пошло не так. Попробуйте позже или свяжитесь со мной.</div>
                </div>
            );
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        console.log(user.isAuth);

        if(user.isAuth){
            setUserName('user')
            setUserPhone(user.user.phone)
        }

        console.log(order.order);
    },[])


    if (loading) {

        return (
            <div className='App'>
                <Header />
                <Loader />
            </div>
        );
    }

    return (
        <div className='App'>
            <Header />
            <OrderForm orders={order.order}
             addOrder={addOrder}
             orderCreated={orderCreated}
             isAuth={user.isAuth}
             userName={userName}
             setUserName={setUserName}
             userPhone={userPhone}
             setUserPhone={setUserPhone}
             note={note}
             setNote={setNote} />
        </div>
    );
};

export default Order;