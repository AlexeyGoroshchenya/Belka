import React from 'react';
import './assets/CSS/App.css';

import { BrowserRouter } from "react-router-dom";
import AppRouter from './assets/components/AppRouter';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './assets/http/userAPI';
import Loader from './assets/components/UI/Loader/Loader';


const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading]= useState(true)

  useEffect(() => {
    check().then((data) => {

      if(data){
        console.log(data);
      user.setUser(data)
      user.setIsAuth(true)
      
      }
      

    }).finally(()=> setLoading(false))

  }, [])

  if(loading) {

     return <Loader/>
    }


  return (
    <BrowserRouter>

      <AppRouter />

    </BrowserRouter>
  )


})

export default App;


