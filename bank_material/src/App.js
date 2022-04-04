import React from 'react';
import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from "react-router-dom"
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import CreateAccount from './Component/CreateAccount';
import Users from './Component/User';
import Update_Delete from './Component/UpdateDelete';
import Deposit from './Component/Deposit';
import Transfer from './Component/Transfer';
import TransactionHistory from './Component/Transactions';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<Login />} />
          <Route path='/new' element={<CreateAccount />} />
          <Route path='/user' element={<Users />} />
          <Route path='/u-d' element={<Update_Delete />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/transfer' element={<Transfer />} />
          <Route path='/transaction' element={<TransactionHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
