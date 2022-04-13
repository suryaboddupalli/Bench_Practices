import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type songData = {
  title: string;
  song_name: string;
  song: string;
  img: string;
};

type songs = {
  data: songData;
};

function SongList(props: songs) {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia height="250" component="img" src={props.data.img} alt="img" />
      <CardContent>
        <Typography variant="h6">
          {props.data.title}-{props.data.song_name}
        </Typography>
        <audio controls src={props.data.song} />
      </CardContent>
    </Card>
  );
}

export default SongList;
