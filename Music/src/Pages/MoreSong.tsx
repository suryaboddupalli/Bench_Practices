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
  CardActions,
} from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useDispatch, useSelector } from "react-redux";
import FooterPlayer from "../Component/FooterPlayer";
import Navbar from "../Component/NavBar";
import { RootState } from "../Redux/Store";
import { currSong, RecentPlayList, AddPlaylist } from "./../Redux/Action";
import { download } from "../Redux/Action";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import { useEffect, useState } from "react";
import { songsData } from "../Redux/ActionTypes";
import Player from "../Component/Player";

function MoreSongs() {
  const normalData = useSelector(
    (state: RootState) => state.songReducer.playlists
  );
  const lang = useSelector((state: RootState) => state.songReducer.language);
  const DSong = useSelector((state: RootState) => state.songReducer.download);
  const bg = useSelector((state: RootState) => state.songReducer.bgColor);
  const dispatch = useDispatch();
  const [data, setData] = useState<songsData[]>([]);
  const [shuffle, setShuffle] = useState<Boolean>(false);
  const dataShuffle = (arr: any) => [...arr].sort(() => Math.random() - 0.5);
  useEffect(() => {
    if (shuffle) {
      setData(dataShuffle(normalData));
    } else {
      setData(normalData);
    }
  }, [shuffle]);

  return (
    <Stack spacing={3}>
      <Navbar />
      <Typography variant="h4">Top songs</Typography>
      <IconButton onClick={() => setShuffle(!shuffle)}>
        {shuffle ? <ShuffleOnIcon /> : <ShuffleIcon />}
      </IconButton>
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
                  <Card sx={{ width: 270, height: 320, bgcolor: bg }}>
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
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => dispatch(AddPlaylist(song))}
                >
                  Add Playlist
                </Button>
              </Grid>
            ))}
        </Grid>
        <div style={{ marginTop: "10px" }}>{/* <FooterPlayer /> */}</div>
      </div>
      <Player />
    </Stack>
  );
}

export default MoreSongs;
