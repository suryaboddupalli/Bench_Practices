import React from 'react'
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Users from "./Components/Users"
import UserDetails from "./Components/UserDetails"
import Navbar from './Components/Navbar'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/user' element={<Users />} exact />
          <Route path='/userlist' element={<UserDetails />} exact />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </div>
  )
}

export default App