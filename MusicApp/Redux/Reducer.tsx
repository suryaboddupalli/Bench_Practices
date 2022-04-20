import { Data, Moviesongs } from "../db";
import {
  CURR_SONG,
  MUSIC_LANG,
  PLAYLIST,
  TIMES_PLAYED,
  CURR_SEARCH,
} from "./Action";
import {
  curr_search,
  playlist,
  searchType,
  lang,
  played,
  currSong,
} from "./ActionTypes";
import { details, songsData } from "./ActionTypes";

type instates = {
  playlists: songsData[];
  searchData: details[] | null;
  language: string;
  currSong: songsData | null;
};

const initialState: instates = {
  currSong: null,
  playlists: Data,
  searchData: null,
  language: "",
};

export const songReducer = (
  state = initialState,
  action: curr_search | playlist | lang | searchType | played | currSong
): instates => {
  switch (action.type) {
    case CURR_SEARCH:
      console.log(action.payload);
      return { ...state, searchData: action.payload };
    case CURR_SONG:
      return { ...state, currSong: action.payload };
    case PLAYLIST:
      return { ...state, playlists: action.payload };
    case TIMES_PLAYED:
      Moviesongs[action.payload].timesPlayed += 1;
      return state;
    case MUSIC_LANG:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};
