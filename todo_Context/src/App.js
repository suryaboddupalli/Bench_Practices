import React from 'react'
import Page from './components/page'
import { ContextProvider } from './Context'


function App() {
  return (
    <ContextProvider>
      <div>
        <Page />
      </div>
    </ContextProvider>
  )
}

export default App
