import './App.css';
import {ContextProvider} from "./context/context";
import {Routes, Route} from "react-router-dom";
import Register from './pages/register/register';
import Login from "./pages/login/login";
import Homepage from "./pages/homepage/homepage";
import Create_order from './pages/create-order/create-order';
import Orders from './pages/orders/orders';
function App() {

  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route exact path='/' element={ <Login />}/>
          <Route path='/register' element={ <Register />}/>
          <Route path='/homepage' element={ <Homepage />}/>
          <Route path='/createorder' element={ <Create_order /> }/>
          <Route path='/orders' element={ <Orders />} />
        </Routes>
        </ContextProvider>
      </div>
   )
}

export default App
