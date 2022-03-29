import React from 'react'
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Users from "./Components/Users"
import UserDetails from "./Components/UserDetails"
import Navbar from './Components/Navbar'
import UserData from './Components/ReactQuery/StaleRefetchPoling'
import OnclickQuery from './Components/ReactQuery/OnclickQuery'
import Callbacks from './Components/Callback'
import DataTransformation from './Components/ReactQuery/DataTransformation'
import CustomHook from './Components/ReactQuery/Hooks/DataFetch'
import User from './Components/ReactQuery/User'
import ParallelQuery from './Components/ReactQuery/ParallelQuery'
import DynamicParallel from './Components/ReactQuery/DynamicParallel'
import InitialData from './Components/ReactQuery/InitialData'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          {/* <Route path='/user' element={<Users />} exact />
          <Route path='/userlist' element={<UserDetails />} exact /> */}
          {/* <Route path="/refetch" element={<UserData />} /> */}
          {/* <Route path='/onclick' element={<OnclickQuery />} exact /> */}
          {/* <Route path='/callback' element={<Callbacks />} exact /> */}
          {/* <Route path='/data' element={<DataTransformation />} exact /> */}
          {/* <Route path='/data' element={<CustomHook />} exact /> */}
          {/* <Route path='/user/:id' element={<User />} exact /> */}
          {/* <Route path='/data' element={<ParallelQuery />} /> */}
          {/* <Route path='/data' element={<DynamicParallel ids={[1, 4, 6]} />} /> */}
          <Route path='/data' element={<InitialData />} />

        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </div>
  )
}

export default App