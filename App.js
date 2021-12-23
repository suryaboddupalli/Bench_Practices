import IndexRoute from "./Routes/indexRoute"
import Navbar from "./Components/Navbar/Navbar"
import { createContext } from "react"
export const Context = createContext()

function App() {
    return (
        <div>
            <Context.Provider >
                <Navbar />
                <IndexRoute />
            </Context.Provider>
        </div>
    )
}

export default App