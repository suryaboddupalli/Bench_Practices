import React, { createContext } from 'react'

const Store = createContext()

const StoreProvider = Store.Provider
const StoreConsumer = Store.Consumer

export { StoreProvider,StoreConsumer}