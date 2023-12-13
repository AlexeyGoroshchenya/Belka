import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import UserStore from './assets/store/UserStore';
import DeviceStore from './assets/store/DeviceStore';

export const Context = createContext(null)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Context.Provider value={{
  user: new UserStore(),
  devices: new DeviceStore()
}}>

    <App />
</Context.Provider>



  // <React.StrictMode>
  
  // </React.StrictMode>
);


