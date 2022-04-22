import { Button, IconButton, Stack } from "@mui/material";
import { Moviesongs } from "./../db";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import KeyboardArrowLeftSharpIcon from "@mui/icons-material/KeyboardArrowLeftSharp";
import { useEffect, useState } from "react";

function Slides() {
  const [slide, setSlide] = useState(1);
  const [indexData, setIndexData] = useState<number>(0);
  const [opacityValue, setOpacityValue] = useState<number>();

  useEffect(() => {
    if (slide === indexData + 1) {
      setOpacityValue(0.9);
    } else {
      setOpacityValue(0);
    }
  }, [indexData]);

  const nextSlide = (e: MouseEvent) => {
    console.log(Moviesongs.length);
    if (slide !== Moviesongs.length) {
      setSlide(slide + 1);
    } else if (slide === Moviesongs.length) {
      setSlide(1);
    }
  };

  const prevSlide = (e: MouseEvent) => {
    console.log(Moviesongs.length);
    console.log(slide);
    if (slide !== 1) {
      console.log(slide);
      console.log("true");
      setSlide(slide - 1);
    } else if (slide === 1) {
      console.log(slide);
      console.log("false");
      setSlide(Moviesongs.length);
    }
  };
  return (
    <Stack sx={{ marginTop: "50px", marginLeft: "100px" }}>
      {Moviesongs.map((movie, index) => {
        setIndexData(index);
        return (
          <Stack
            key={index}
            sx={{
              width: "100%",
              height: "100% ",
              position: "absolute",
              opacity: opacityValue,
            }}
          >
            <img
              src={movie.img}
              width="80%"
              height="400px"
              object-fit="cover"
            />
          </Stack>
        );
      })}
      <Stack direction="row">
        <IconButton
          color="default"
          sx={{
            width: "50px",
            borderRadius: "50%",
            marginTop: "180px",
            marginLeft: "10px",
            bgcolor: "white",
          }}
          onClick={() => nextSlide}
        >
          <KeyboardArrowLeftSharpIcon />
        </IconButton>
        <IconButton
          color="default"
          sx={{
            width: "50px",
            borderRadius: "50%",
            marginTop: "170px",
            marginLeft: "890px",
            bgcolor: "white",
          }}
          onClick={() => prevSlide}
        >
          <ChevronRightSharpIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default Slides;
