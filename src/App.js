
import './assets/CSS/App.css';

import { BrowserRouter } from "react-router-dom";
import AppRouter from './assets/components/AppRouter';


function App() {
  console.log(2);

  return (
  <BrowserRouter>

    <AppRouter />

  </BrowserRouter>
  )


}

export default App;
