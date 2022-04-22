import React, { useEffect, useState } from "react";
import Model from "./SongModel";
import SongList from "./SongList";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/Store";
import { SongBanner } from "../Redux/Action";

function Banner() {
  const Data = useSelector((state: RootState) => state.songReducer.banner);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (Data !== null) {
      setIsOpen(Data);
    }
  }, [Data]);
  return (
    <div>
      <Model open={isOpen} isClose={() => dispatch(SongBanner(false))}>
        <SongList />
      </Model>
    </div>
  );
}

export default Banner;
