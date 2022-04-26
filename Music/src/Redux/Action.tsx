import { details, songsData, curr_playlist, loginData } from "./ActionTypes";
export const CURR_SONG = "CURR_SONG";
export const PLAYLIST = "PLAYLIST";
export const TIMES_PLAYED = "TIMES_PLAYED";
export const SEARCH_BAR = "SERACH_BAR";
export const MUSIC_LANG = "MUSIC_LANG";
export const CURR_SEARCH = "CURR_SEARCH";
export const SONG_BANNER = "SONG_BANNER";
export const CURR_PLAYLIST = "CURR_PLAYLIST";
export const DOWNLOAD = "DOWNLOAD";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const BG_COLOR = "BG_COLOR";
export const RECENT = "RECENT";

export const searchData: any = (data: details[]) => {
  console.log(data);
  return {
    type: CURR_SEARCH,
    payload: data,
  };
};

export const currSong = (data: songsData) => {
  localStorage.setItem("currSong", JSON.stringify(data));
  console.log(data);
  return {
    type: CURR_SONG,
    payload: data,
  };
};

export const playlist = (playlist: songsData[]) => {
  return {
    type: PLAYLIST,
    payload: playlist,
  };
};

export const increaseTimesPlayed = (id: number) => {
  return {
    type: TIMES_PLAYED,
    payload: id,
  };
};

export const musicLang = (langList: string) => {
  return {
    type: MUSIC_LANG,
    payload: langList,
  };
};

export const SongBanner = (data: boolean) => {
  return {
    type: SONG_BANNER,
    payload: data,
  };
};

export const currPlayList = (data: curr_playlist) => {
  console.log(data);
  return {
    type: CURR_PLAYLIST,
    payload: data,
  };
};

export const download = (data: songsData) => {
  console.log(data);
  return {
    type: DOWNLOAD,
    payload: { ...data, download: true },
  };
};

export const login = (data: loginData) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const bgcolor = (color: string) => {
  console.log(color);
  return {
    type: BG_COLOR,
    payload: color,
  };
};

export const RecentPlayList = (song: songsData) => {
  return {
    type: RECENT,
    payload: song,
  };
};
