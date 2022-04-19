import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterPlayer from "./Component/FooterPlayer";
import Home from "./Component/Home";
import MoreSongs from "./Component/MoreSongs";
import Navbar from "./Component/Navbar";
import SongCard from "./Component/SongCard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SongCard />} />
        <Route path="/more" element={<MoreSongs />} />
      </Routes>
      <FooterPlayer />
    </BrowserRouter>
  );
}

export default App;
