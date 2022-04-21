import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import Search from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { musicLang } from "../Redux/Action";

export default function Navbar() {
  const dispatch = useDispatch();
  const [lang, setLang] = useState<string>();
  const navigate = useNavigate();

  const langHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLang(e.target.value);
    dispatch(musicLang(e.target.value));
  };

  return (
    <Box sx={{ flexGrow: 1, borderRadius: "5px" }}>
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
          <IconButton color="secondary" onClick={() => navigate("/search")}>
            <Search />
          </IconButton>
          <FormControl
            variant="standard"
            color="secondary"
            sx={{ m: 1, minWidth: 120 }}
          >
            <TextField
              label="Langauge"
              fullWidth
              select
              value={lang}
              onChange={langHandler}
            >
              <MenuItem value="">Language</MenuItem>
              <MenuItem value="Telugu">Telugu</MenuItem>
              <MenuItem value="Tamil">Tamil</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
            </TextField>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
