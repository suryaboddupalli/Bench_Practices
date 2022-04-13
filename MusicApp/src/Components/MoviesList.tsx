import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

type songs = {
  song_name: string;
  song: string;
};

type Movies = {
  Name: string;
  Songs: songs[];
  img: string;
};

type MoviesData = {
  data: Movies;
};

const ClickHandler = (e: React.MouseEventHandler<HTMLSpanElement>) => {};

function MoviesList(props: MoviesData) {
  return (
    <Link>
      <Card sx={{ width: 350 }}>
        <CardMedia
          height="250"
          component="img"
          src={props.data.img}
          alt="img"
        />
        <CardContent>
          <Typography variant="h6">{props.data.Name}</Typography>
        </CardContent>
        {console.log(props.data)}
      </Card>
    </Link>
  );
}

export default MoviesList;
