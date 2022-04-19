import {
  Stack,
  TextField,
  Card,
  Button,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";
import { Data } from "../db";
import { useDispatch } from "react-redux";
import { currSong } from "./../Redux/Action";

function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<any>();
  return (
    <Stack spacing={3} direction="row" paddingLeft={4}>
      <TextField
        label={<SearchIcon color="secondary" />}
        name="search"
        color="secondary"
        variant="outlined"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      <div>
        {Data.filter((val) => {
          if (search == "") {
            return val;
          } else if (val.song.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }).map((song, index) => (
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
        ))}
      </div>
    </Stack>
  );
}

export default SearchBar;
