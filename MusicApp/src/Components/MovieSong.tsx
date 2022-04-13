import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function MovieSong() {
  const [click, setClick] = useState(false);
  return (
    <Box>
      <Grid container>
        <Grid item xs={4} sx={{ padding: 10 }}>
          <Card sx={{ width: 400 }}>
            <CardContent>
              <Typography variant="h5"> Now Playing</Typography>
            </CardContent>
            <CardMedia
              component="img"
              src="https://static.toiimg.com/photo/msid-89043434/89043434.jpg?183612"
              height={220}
              sx={{ padding: "50px", paddingRight: "40px" }}
            />
          </Card>
        </Grid>
        <Grid item xs={8} sx={{ paddingLeft: 30, paddingTop: 10 }}>
          <Stack spacing={3} direction="column">
            <Stack spacing={2} direction="row">
              <Button onClick={() => setClick(!click)}>
                <Avatar src="https://static.toiimg.com/photo/msid-89043434/89043434.jpg?183612" />
                <Typography variant="h6">Song</Typography>
                {click ? <audio src="./music/yadagara.mp3" autoPlay /> : null}
              </Button>
            </Stack>
            <audio src="./music/yadagara.mp3" controls />
            <audio src="./music/yadagara.mp3" controls />
            <audio src="./music/yadagara.mp3" controls />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MovieSong;
