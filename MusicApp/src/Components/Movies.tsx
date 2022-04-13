import React, { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { Moviesongs } from "../db";
import MoviesList from "./MoviesList";

function Movies() {
  const [data, setData] = useState<Movies[]>();

  useEffect(() => {
    setData(Moviesongs);
  });

  type songs = {
    song_name: string;
    song: string;
  };

  type Movies = {
    Name: string;
    Songs: songs[];
    img: string;
  };

  return (
    <Stack spacing={4}>
      <Grid container spacing={3} direction="row">
        <Grid item xs={3}>
          {data && data.map((movies: Movies) => <MoviesList data={movies} />)}
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Movies;
