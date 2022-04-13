import React from "react";
import { Moviesongs } from "../db";
import Movies from "./Movies";
import MoviesList from "./MoviesList";
import MovieSong from "./MovieSong";

function Dashboard() {
  return (
    <div>
      {/* <Movies /> */}
      <MovieSong />
    </div>
  );
}

export default Dashboard;
