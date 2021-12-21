import PageOne from "./Components/HOC_1/PageOne"
import Page from "./Components/HOC_2/Page"
import HooksPage from "./Components/Hooks/HooksPage"

function App() {
    return (
        <div>
            <Page />,
            <PageOne />
            <HooksPage />
        </div>
    )
}

export default App