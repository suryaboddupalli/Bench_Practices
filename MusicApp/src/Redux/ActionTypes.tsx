import { GET_DATA } from "./Action";

export type actionData = {
  type: "GET_DATA";
  payload: Data[];
};

type Data = {
  title: String;
  song_name: String;
  song: String;
  img: String;
};
