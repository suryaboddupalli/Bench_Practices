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
import { currSong } from "./../Redux/Action";
import { download } from "../Redux/Action";

function MoreSongs() {
  const data = useSelector((state: RootState) => state.songReducer.playlists);
  const lang = useSelector((state: RootState) => state.songReducer.language);
  const DSong = useSelector((state: RootState) => state.songReducer.download);
  const DsongId = DSong.map((song) => song.id);
  const dispatch = useDispatch();
  return (
    <Stack spacing={3}>
      <Navbar />
      <Typography variant="h4">Top songs</Typography>
      <Grid container>
        {data
          .filter((song) => {
            if (song.lang.toLowerCase().includes(lang.toLocaleLowerCase())) {
              return song;
            }
          })
          .map((song, index) => (
            <Grid key={index} item xs={3} spacing={4}>
              <Button onClick={() => dispatch(currSong(song))}>
                <Card sx={{ width: 270, height: 300 }}>
                  <CardMedia
                    height="210"
                    width="140"
                    component="img"
                    src={song.img}
                    alt="img"
                  />
                  <CardContent>
                    <Typography variant="h6" color="secondary">
                      {song.title}-{song.song_name} &nbsp; &nbsp;
                      <Tooltip
                        title="click to download"
                        onClick={() => dispatch(download(song))}
                      >
                        <IconButton color="secondary">
                          <FileDownloadIcon />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                  </CardContent>
                </Card>
              </Button>
            </Grid>
          ))}
      </Grid>
      <div style={{ marginTop: "10px" }}>{/* <FooterPlayer /> */}</div>
    </Stack>
  );
}

export default MoreSongs;
