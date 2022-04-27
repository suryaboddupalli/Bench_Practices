// export type songData = {
//   song_name: string;
//   song: string;
// };

export type loginData = {
  userId: string;
  password: string;
};

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
  id: number | undefined;
  title: string | undefined;
  song_name: string | undefined;
  song: string | undefined;
  img: string | undefined;
  lang: string;
  download?: boolean;
};

export type curr_search = {
  type: "CURR_SEARCH";
  payload: details[];
};

export type curr_playlist = {
  id: number;
  Songlist: songsData;
};

export type currPlist = {
  type: "CURR_PLAYLIST";
  payload: curr_playlist[];
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

export type banner = {
  type: "SONG_BANNER";
  payload: boolean;
};

export type download = {
  type: "DOWNLOAD";
  payload: songsData;
};

export type login = {
  type: "LOGIN";
  payload: loginData;
};

export type logout = {
  type: "LOGOUT";
};

export type bg = {
  type: "BG_COLOR";
  payload: string;
};

export type recent = {
  type: "RECENT";
  payload: songsData;
};

export type AddPlaylist = {
  type: "ADD_PLAYLIST";
  payload: songsData;
};

export type removePlaylist = {
  type: "REMOVE_PLAYLIST";
  payload: number;
};
