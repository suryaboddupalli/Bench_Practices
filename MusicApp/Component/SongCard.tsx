import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
  CardMedia,
} from "@mui/material";
import { Data } from "./../db";
import { useDispatch } from "react-redux";
import { currSong } from "./../Redux/Action";
import { useNavigate } from "react-router-dom";

type songsData = {
  title: string;
  song_name: string;
  song: string;
  img: string;
};

function SongCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <Card>
        <Stack direction="row">
          <Typography variant="h4" color="secondary">
            Top Songs
          </Typography>
          <CardActions sx={{ marginLeft: "900px" }}>
            <Button color="secondary" onClick={() => navigate("/more")}>
              more songs
            </Button>
          </CardActions>
        </Stack>
        <CardContent>
          <Stack direction="row">
            {Data &&
              Data.map((song, index) => {
                if (index < 5) {
                  return (
                    <Button onClick={() => dispatch(currSong(song))}>
                      <Card
                        sx={{
                          width: 250,
                          height: 300,
                          borderRadius: "10px",
                          border: "2px solid grey",
                        }}
                      >
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
                  );
                }
              })}
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default SongCard;
