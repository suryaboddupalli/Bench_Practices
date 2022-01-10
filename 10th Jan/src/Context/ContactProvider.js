import React, { useContext } from 'react'
import useStorage from '../Hooks/useStorage'

const ContactContext = React.createContext()

export function useContacts(){
    return useContext(ContactContext)
}

export function ContactProvider({ children }) {
    const [contacts, setContacts] = useStorage('contacts', [])

    function createContact(id, name) {
        setContacts(prevContacts => {
            return [...prevContacts, { id, name }]
        })
    }

    return (
        <ContactContext.Provider value={{contacts, createContact}}>
            {children}
        </ContactContext.Provider>
    )
}

