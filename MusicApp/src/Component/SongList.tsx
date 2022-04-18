import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { makeStyles } from "@material-ui/styles";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const useStyles = makeStyles({
  card: {
    "&:hover": {
      border: "2px solid grey",
    },
  },
  button: {
    "&:hover": {
      opacity: 0.4,
    },
  },
  img: {
    borderRadius: "15px",
    paddingLeft: "10px",
  },
});

export default function SongList() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography variant="h4" sx={{ fontSize: "40px" }}>
          Now Playing
        </Typography>
        <Typography variant="h6" sx={{ padding: "10px" }}>
          Playing from
        </Typography>
        <img
          className={classes.img}
          src="https://static.toiimg.com/photo/msid-88025017/88025017.jpg?111016"
          width="300px"
          height="300px"
        />
        <Typography variant="h5" sx={{ padding: "30px" }}>
          Movie Name
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Card className={classes.card} sx={{ display: "flex" }}>
          <Button className={classes.button}>
            <CardMedia
              component="img"
              sx={{ width: 110, borderRadius: "5px" }}
              image="https://static.toiimg.com/photo/msid-88025017/88025017.jpg?111016"
            />
          </Button>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
          </Box>
          <IconButton sx={{ marginLeft: "400px" }}>
            <DownloadIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </Card>
      </Grid>
    </Grid>
  );
}
