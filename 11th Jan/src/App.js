import React from "react";
import useStorage from "./Hooks/useStorage";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { ContactProvider } from './Context/ContactProvider'
import Contacts from "./Components/Contacts";
import { ChatProvider } from "./Context/ChatProvider";


function App() {
    const [id, setId] = useStorage('userId')
    const dashboard = (
        <ChatProvider>
            <ContactProvider>
                <Dashboard id={id} />
            </ContactProvider>
        </ChatProvider>

    )
    return (
        <div>

            {id ? dashboard : <Login getId={setId} />}

            {/* <Contacts /> */}

        </div>
    );
}

export default App;