
import './assets/CSS/App.css';

import { BrowserRouter } from "react-router-dom";
import AppRouter from './assets/components/AppRouter';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Context } from '.';
import { check } from './assets/http/userAPI';


const App = observer(() => {
  const { user } = useContext(Context)

  useEffect(() => {
    check().then((data) => {
      user.setUser(data)
      user.setIsAuth(true)
      console.log(user.user.role);

    })

  }, [])

  return (
    <BrowserRouter>

      <AppRouter />

    </BrowserRouter>
  )


})

export default App;


