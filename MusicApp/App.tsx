import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavBar";
import Home from "./Pages/Home";
import Language from "./Pages/Languages";
import MoreSongs from "./Pages/MoreSong";
import SearchBar from "./Pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchBar />} />
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<MoreSongs />} />
        <Route path="/lang" element={<Language />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
