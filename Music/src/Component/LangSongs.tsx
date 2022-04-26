import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  CardMedia,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { currPlayList, currSong, RecentPlayList } from "./../Redux/Action";
import { useNavigate } from "react-router-dom";
import { RootState } from "../Redux/Store";
import FooterPlayer from "../Component/FooterPlayer";
import { useEffect, useState } from "react";

type props = {
  lang: string;
};

function LangSongs(props: props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.songReducer.playlists);
  const bg = useSelector((state: RootState) => state.songReducer.bgColor);
  const [color, setColor] = useState<"white" | "black">("black");

  useEffect(() => {
    if (color === "black") {
      setColor("white");
    } else {
      setColor("black");
    }
  }, [bg]);

  return (
    <div>
      <Card sx={{ bgcolor: bg }}>
        <Stack direction="row">
          <Typography variant="h4" sx={{ color: color }}>
            {props.lang} Songs
          </Typography>
          <CardActions sx={{ marginLeft: "900px" }}>
            <Button onClick={() => navigate("/more")}>more songs</Button>
          </CardActions>
        </Stack>
        <CardContent>
          <Stack direction="row">
            {data
              .filter((song) => {
                if (
                  song.lang.toLowerCase().includes(props.lang.toLowerCase())
                ) {
                  return song;
                }
              })
              .map((song, index: number) => {
                if (index < 6) {
                  return (
                    <Button
                      key={index}
                      onClick={() =>
                        dispatch(currSong(song)) &&
                        dispatch(RecentPlayList(song))
                      }
                    >
                      <Card
                        color="secondary"
                        sx={{
                          width: 200,
                          height: 200,
                          borderRadius: "10px",
                          bgcolor: bg,
                          color: color,
                        }}
                      >
                        <CardMedia
                          height="150"
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

export default LangSongs;
