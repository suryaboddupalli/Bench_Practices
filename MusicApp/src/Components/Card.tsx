import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function CardData({ data }) {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia height="250" component="img" src={data.img} alt="img" />
      <CardContent>
        <Typography variant="h6">
          {data.title}-{data.song_name}
        </Typography>
        <audio controls src={data.song} />
      </CardContent>
    </Card>
  );
}

export default CardData;
