import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import Search from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  FormControl,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Button,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { musicLang, logout } from "../Redux/Action";
import DownloadIcon from "@mui/icons-material/Download";
import LoginIcon from "@mui/icons-material/Login";
import { RootState } from "../Redux/Store";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.songReducer.login);
  const dispatch = useDispatch();
  const [lang, setLang] = useState<string>();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<any>(null);

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
          <IconButton
            color="secondary"
            onClick={() => navigate("/search")}
            sx={{ marginRight: "30px" }}
          >
            <Search />
          </IconButton>

          <FormControl
            variant="standard"
            color="secondary"
            sx={{ m: 1, minWidth: 120, marginRight: "30px" }}
          >
            <TextField
              label="Langauge"
              fullWidth
              color="secondary"
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
          <Tooltip title="Download" sx={{ marginRight: "30px" }}>
            <IconButton color="secondary" onClick={() => navigate("/download")}>
              <DownloadIcon />
            </IconButton>
          </Tooltip>
          {user ? (
            <>
              <IconButton
                onClick={(e) => setAnchorEl(e.currentTarget)}
                color="secondary"
              >
                <Avatar
                  alt="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  src=""
                />
                {user.userId}
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                open={Boolean(anchorEl)}
              >
                <MenuItem>
                  <Button onClick={() => dispatch(logout())}>Log Out</Button>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Tooltip
              title="login"
              color="secondary"
              sx={{ marginRight: "30px", fontSize: "15px" }}
            >
              <IconButton onClick={() => navigate("/login")}>
                <LoginIcon />
                Login
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
