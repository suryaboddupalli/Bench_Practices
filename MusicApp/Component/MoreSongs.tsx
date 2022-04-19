import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Data } from "./../db";
import { currSong } from "./../Redux/Action";

function MoreSongs() {
  const dispatch = useDispatch();
  return (
    <Stack spacing={3}>
      <Typography variant="h4">Top songs</Typography>
      <Grid container>
        {Data &&
          Data.map((song, index) => (
            <Grid item xs={3} spacing={4}>
              <Button onClick={() => dispatch(currSong(song))}>
                <Card sx={{ width: 270, height: 300 }}>
                  <CardMedia
                    height="250"
                    component="img"
                    src={song.img}
                    alt="img"
                  />
                  <CardContent>
                    <Typography variant="h6">
                      {song.title}-{song.song_name}
                    </Typography>
                  </CardContent>
                </Card>
              </Button>
            </Grid>
          ))}
      </Grid>
    </Stack>
  );
}

export default MoreSongs;
