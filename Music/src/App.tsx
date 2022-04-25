import { BrowserRouter, Routes, Route } from "react-router-dom";
import Downloads from "./Pages/Downloads";
import Home from "./Pages/Home";
import Language from "./Pages/Languages";
import Login from "./Pages/Login";
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
        <Route path="/login" element={<Login />} />
        <Route path="/download" element={<Downloads />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
