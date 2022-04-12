export const GET_DATA = "GET_DATA";

export type Data = {
  title: String;
  song_name: String;
  song: String;
  img: String;
};

export const getData = (data: Data[]) => {
  return {
    action: GET_DATA,
    payload: data,
  };
};
