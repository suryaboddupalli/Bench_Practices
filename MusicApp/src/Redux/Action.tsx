export const CURRENT_DATA = "CURRENT_DATA";

export type details = {
  title: string;
  song_name: string;
  song: string;
  img: string;
};

export const currSong: any = (data: details) => {
  return {
    type: CURRENT_DATA,
    payload: data,
  };
};
