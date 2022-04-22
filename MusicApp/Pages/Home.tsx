import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import Banner from "../Component/SongBanner";
import LangSongs from "../Component/LangSongs";
import Navbar from "../Component/NavBar";
import FooterPlayer from "../Component/FooterPlayer";

function Home() {
  const banner = useSelector((state: RootState) => state.songReducer.banner);

  return (
    <>
      {banner ? (
        <Banner />
      ) : (
        <div>
          <Navbar />
          <br />
          <br />
          <LangSongs lang={""} />
          <br />
          <br />
          <LangSongs lang={"Telugu"} />
          <br />
          <br />
          <LangSongs lang={"Tamil"} />
        </div>
      )}
      <footer
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <FooterPlayer />
      </footer>
    </>
  );
}

export default Home;
