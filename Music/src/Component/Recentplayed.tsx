import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import Navbar from "../Component/NavBar";
import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  CardMedia,
} from "@mui/material";

function RecentPlayed() {
  const banner = useSelector((state: RootState) => state.songReducer.banner);
  const recent = useSelector(
    (state: RootState) => state.songReducer.recentPlayList
  );
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
      {recent[0] ? (
        <>
          <Card sx={{ bgcolor: bg }}>
            <Stack direction="row">
              <Typography variant="h4" sx={{ color: color }}>
                Recent playlist
              </Typography>
            </Stack>
            <CardContent>
              <Stack direction="row">
                {recent.map((song, index) => (
                  <Button key={index}>
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
                ))}
              </Stack>
            </CardContent>
          </Card>
        </>
      ) : null}
    </div>
  );
}

export default RecentPlayed;
