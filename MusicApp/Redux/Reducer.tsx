import { Data, Moviesongs } from "../db";
import {
  CURR_SONG,
  MUSIC_LANG,
  PLAYLIST,
  TIMES_PLAYED,
  CURR_SEARCH,
  SONG_BANNER,
} from "./Action";
import {
  curr_search,
  playlist,
  searchType,
  lang,
  played,
  currSong,
  banner,
} from "./ActionTypes";
import { details, songsData } from "./ActionTypes";

type instates = {
  playlists: songsData[];
  searchData: details[] | null;
  language: string;
  currSong: songsData | null;
  banner: boolean;
};

const initialState: instates = {
  currSong: null,
  playlists: Data,
  searchData: null,
  language: "",
  banner: false,
};

export const songReducer = (
  state = initialState,
  action:
    | curr_search
    | playlist
    | lang
    | searchType
    | played
    | currSong
    | banner
): instates => {
  switch (action.type) {
    case CURR_SEARCH:
      console.log(action.payload);
      return { ...state, searchData: action.payload };
    case CURR_SONG:
      // const currentSong = JSON.parse(localStorage.getItem("currSong") || "{}");
      // const data = action.payload;
      // if (currentSong) {
      //   console.log(currentSong);
      //   return { ...state, currSong: currentSong };
      // } else {
      //   console.log(data);
      //   return { ...state, currSong: data };
      // }
      return { ...state, currSong: action.payload };
    case PLAYLIST:
      return { ...state, playlists: action.payload };
    case TIMES_PLAYED:
      Moviesongs[action.payload].timesPlayed += 1;
      return state;
    case SONG_BANNER:
      console.log(action.payload);
      return {
        ...state,
        banner: action.payload,
      };
    case MUSIC_LANG:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};
