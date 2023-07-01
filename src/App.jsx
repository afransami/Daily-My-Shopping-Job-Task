import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Components/Provider/AuthProvider';

const App = () => {
  return (
    <div>      
      <AuthProvider>   
      <Routes>           
        <Route path="/dashboard" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;