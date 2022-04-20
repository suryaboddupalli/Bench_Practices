import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MoreSongs from "./Pages/MoreSong";
import SearchBar from "./Pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchBar />} />
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<MoreSongs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
