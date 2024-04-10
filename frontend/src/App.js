import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Toughlove from './pages/Toughlove';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Signinfo from './pages/Signinfo';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/' element={<Toughlove/>}/>  
          <Route exact path='/signup' element={<Signup/>}/> 
          <Route exact path='/signinfo' element={<Signinfo/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
