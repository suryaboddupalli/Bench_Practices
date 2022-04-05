import React from 'react';
import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from "react-router-dom"
import Booking from './Components/Booking';
import Hotels from './Components/Hotels';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';

function App() {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/rooms' element={<Hotels />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/book' element={<Booking />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
