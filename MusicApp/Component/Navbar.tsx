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
} from "@mui/material";
import React, { useState } from "react";

export default function Navbar() {
  const [lang, setLang] = useState<string>();
  const navigate = useNavigate();

  const langHandler = (e: SelectChangeEvent) => {
    setLang(e.target.value);
  };

  return (
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
          <IconButton color="secondary" onClick={() => navigate("/search")}>
            <Search />
          </IconButton>
          <FormControl
            variant="standard"
            color="secondary"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel>Language</InputLabel>
            <Select value={lang} onChange={langHandler} label="lang">
              <MenuItem value="">Language</MenuItem>
              <MenuItem value="Telugu">Telugu</MenuItem>
              <MenuItem value="Tamil">Tamil</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
