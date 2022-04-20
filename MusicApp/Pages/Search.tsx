import {
  Stack,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";
import { Data } from "../db";
import { useDispatch } from "react-redux";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import { Box } from "@mui/system";
import { searchData } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState<any>();
  return (
    <Stack spacing={3} paddingLeft={4}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => navigate("/")}
            >
              <LibraryMusicOutlinedIcon color="secondary" />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontFamily: "cursive",
              }}
              color="secondary"
            >
              Music
            </Typography>
            <TextField
              label={<SearchIcon color="secondary" />}
              name="search"
              color="secondary"
              variant="outlined"
              autoFocus
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
            />
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        {Data &&
          Data.filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val?.title.toLowerCase().includes(search?.toLowerCase())
            ) {
              return val;
            } else if (
              val?.song_name.toLowerCase().includes(search?.toLowerCase())
            ) {
              return val;
            }
          }).map((song, index) => dispatch(searchData(song)))}
      </div>
    </Stack>
  );
}

export default SearchBar;
