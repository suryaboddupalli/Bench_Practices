import React, { useEffect } from "react";
import { Grid, Stack } from "@mui/material";
import { connect } from "react-redux";
import CardData from "./Card";
import Navbar from "./Navbar";
import { getData } from "../Redux/Action";
import { Data } from "../db";
import { RootState } from "../Redux/Store";

function Dashboard({ dispatchData, data }) {
  useEffect(() => {
    dispatchData(Data);
  }, [Data]);

  return (
    <Stack spacing={4} direction="row">
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {data && data.map((song: any) => <CardData data={song} />)}
        </Grid>
      </Grid>
    </Stack>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchData: dispatch(getData(Data)),
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    data: state.SongsReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
