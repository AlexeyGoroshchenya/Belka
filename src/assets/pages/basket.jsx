import React from 'react';
import BasketForm from '../components/Basket/Basket';
import Header from '../components/UI/Header/Header';

const Basket = () => {
    return (
        <div className='App'>
            <Header />
            <BasketForm />
        </div>
    );
};

export default Basket;