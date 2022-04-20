import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { songsData } from "../Redux/ActionTypes";

interface Props {
  song: songsData;
}

function SongCard(Props: any) {
  const dispatch = useDispatch();
  return (
    <Button>
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
          src={Props.song.img}
          alt="img"
        />
        <CardContent>
          <Typography variant="h6">{Props.song.Name}</Typography>
        </CardContent>
      </Card>
    </Button>
  );
}

export default SongCard;
