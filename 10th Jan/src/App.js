import React from "react";
import useStorage from "./Hooks/useStorage";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { ContactProvider } from './Context/ContactProvider'
import Contacts from "./Components/Contacts";


function App() {
    const [id, setId] = useStorage('userId')
    console.log(id)
    return (
        <div>
            {/* <ContactProvider>
                {id ? <Dashboard /> : <Login getId={setId} />}
            </ContactProvider> */}
            <Contacts />

        </div>
    );
}

export default App;