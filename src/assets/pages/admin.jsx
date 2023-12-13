import React from 'react';
import Header from '../components/UI/Header/Header';

const Admin = () => {
    return (

        <>

            <Header />
            <div className='App admin'>

                <div className='button'
                    onClick={() => {
                        console.log(1)


                    }}
                >Добавить тип</div>

                <div className='button'
                    onClick={() => {
                        console.log(2)


                    }}
                >Добавить бренд</div>

                <div className='button'
                    onClick={() => {
                        console.log(3)


                    }}
                >Добавить товар</div>


            </div>
        </>


    );
};

export default Admin;