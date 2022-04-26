import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useDispatch, useSelector } from "react-redux";
import FooterPlayer from "../Component/FooterPlayer";
import Navbar from "../Component/NavBar";
import { RootState } from "../Redux/Store";
import { currSong, RecentPlayList } from "./../Redux/Action";
import { download } from "../Redux/Action";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";

function MoreSongs() {
  const data = useSelector((state: RootState) => state.songReducer.playlists);
  const lang = useSelector((state: RootState) => state.songReducer.language);
  const DSong = useSelector((state: RootState) => state.songReducer.download);
  const bg = useSelector((state: RootState) => state.songReducer.bgColor);
  const dispatch = useDispatch();
  return (
    <Stack spacing={3}>
      <Navbar />
      <Typography variant="h4">Top songs</Typography>
      <div style={{ backgroundColor: bg }}>
        <Grid container>
          {data
            .filter((song) => {
              if (song.lang.toLowerCase().includes(lang.toLocaleLowerCase())) {
                return song;
              }
            })
            .map((song, index) => (
              <Grid key={index} item xs={3} spacing={4}>
                <Button
                  onClick={() =>
                    dispatch(currSong(song)) && dispatch(RecentPlayList(song))
                  }
                >
                  <Card sx={{ width: 270, height: 300, bgcolor: bg }}>
                    <CardMedia
                      height="210"
                      width="140"
                      component="img"
                      src={song.img}
                      alt="img"
                    />
                    <CardContent>
                      <Typography variant="h6" color="secondary">
                        {song.title}-{song.song_name}
                      </Typography>
                      {song.download ? (
                        // <DownloadDoneIcon />
                        console.log("true")
                      ) : (
                        <Tooltip title="click to download">
                          <IconButton
                            color="secondary"
                            onClick={() => dispatch(download(song))}
                          >
                            <FileDownloadIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </CardContent>
                  </Card>
                </Button>
              </Grid>
            ))}
        </Grid>
        <div style={{ marginTop: "10px" }}>{/* <FooterPlayer /> */}</div>
      </div>
    </Stack>
  );
}

export default MoreSongs;
