import './App.css';
import Home from './components/Home'
import Donar from './components/Donar';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NeedFood from './components/NeedFood';
import Volunteer from './components/Volunteer';
import Register from './components/Register';
import Login from './components/Login';
import SuccessStories from './components/SuccessStories';
import { Provider } from "./MyContext";
import { useState } from 'react';
import TakeFood from './components/TakeFood';

function App() {
  

  return (
    <>
      <Provider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Donar' element={<Donar />} />
          <Route path='/NeedFood' element={<NeedFood />} />
          <Route path='/SuccessStories' element={<SuccessStories />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Volunteer' element={<Volunteer />} />
        </Routes>
      </Provider>
    
    </>
  );
}

export default App;