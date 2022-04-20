// export type songData = {
//   song_name: string;
//   song: string;
// };

export type details = {
  id: number;
  Name: string;
  timesPlayed: number;
  music: string;
  img: string;
  lang: string;
  // song: songData[];
};

export type songsData = {
  title: string;
  song_name: string;
  song: string;
  img: string;
};

export type curr_search = {
  type: "CURR_SEARCH";
  payload: details[];
};

export type currSong = {
  type: "CURR_SONG";
  payload: songsData;
};

export type playlist = {
  type: "PLAYLIST";
  payload: songsData[];
};

export type searchType = {
  type: "SEARCH_BAR";
  payload: songsData[];
};

export type played = {
  type: "TIMES_PLAYED";
  payload: number;
};

export type lang = {
  type: "MUSIC_LANG";
  payload: string;
};
