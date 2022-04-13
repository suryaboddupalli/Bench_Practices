import React, { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { Data } from "../db";
import SongList from "./SongList";

function Song() {
  const [data, setData] = useState<songsData[]>();

  useEffect(() => {
    setData(Data);
  });

  type songsData = {
    title: string;
    song_name: string;
    song: string;
    img: string;
  };

  return (
    <Stack spacing={4}>
      <Grid container spacing={3} direction="row">
        <Grid item xs={3}>
          {data && data.map((song: songsData) => <SongList data={song} />)}
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Song;
