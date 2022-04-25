import { Data, Moviesongs } from "../db";
import {
  CURR_SONG,
  MUSIC_LANG,
  PLAYLIST,
  TIMES_PLAYED,
  CURR_SEARCH,
  SONG_BANNER,
  CURR_PLAYLIST,
  DOWNLOAD,
  LOGIN,
  LOGOUT,
} from "./Action";
import {
  curr_search,
  playlist,
  searchType,
  lang,
  played,
  currSong,
  banner,
  currPlist,
  download,
  login,
  logout,
} from "./ActionTypes";
import { details, songsData, curr_playlist, loginData } from "./ActionTypes";

type instates = {
  playlists: songsData[];
  searchData: details[] | null;
  language: string;
  currSong: songsData | null;
  banner: boolean;
  currPlaylist: curr_playlist[];
  download: songsData[];
  downloaded: boolean;
  login: loginData | null;
};

const initialState: instates = {
  currSong: null,
  playlists: Data,
  searchData: null,
  language: "",
  banner: false,
  currPlaylist: [],
  download: [],
  downloaded: false,
  login: null,
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
    | currPlist
    | download
    | login
    | logout
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
    case CURR_PLAYLIST:
      console.log(initialState.currPlaylist);
      console.log(action.payload);
      return {
        ...state,
        currPlaylist: action.payload,
      };
    case DOWNLOAD:
      const playlistSongs = state.playlists.find(
        (song) => song.id === action.payload.id
      );

      const downloadData = state.download.find((Dsong) =>
        Dsong.id === action.payload.id ? true : false
      );

      return {
        ...state,
        download: [...state.download, action.payload],
        // download: downloadData
        //   ? state.download.map((song) =>
        //       song.id === action.payload.id
        //         ? { ...song, download: true }
        //         : { song }
        //     )
        //   : [...state.download, action.payload],
      };

    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        login: null,
      };

    default:
      return state;
  }
};
