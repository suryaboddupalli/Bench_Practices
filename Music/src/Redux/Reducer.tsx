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
  BG_COLOR,
  RECENT,
  ADD_PLAYLIST,
  REMOVE_PLAYLIST,
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
  bg,
  recent,
  AddPlaylist,
  removePlaylist,
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
  login: loginData | null;
  bgColor: string;
  recentPlayList: songsData[];
  Add_PlayList: songsData[];
};

const initialState: instates = {
  currSong: null,
  playlists: Data,
  searchData: null,
  language: "",
  banner: false,
  currPlaylist: [],
  download: [],
  login: null,
  bgColor: "",
  Add_PlayList: [],
  recentPlayList: [],
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
    | bg
    | recent
    | AddPlaylist
    | removePlaylist
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
      const song = state.playlists.find(
        (song) => song.id === action.payload.id
      );
      console.log(song);
      return {
        ...state,
        download: song
          ? [...state.recentPlayList]
          : [action.payload, ...state.recentPlayList],
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
    case BG_COLOR:
      return {
        ...state,
        bgColor: action.payload,
      };
    case RECENT:
      const recent = state.recentPlayList.find(
        (song) => song.id === action.payload.id
      );
      return {
        ...state,
        recentPlayList: recent
          ? [...state.recentPlayList]
          : [action.payload, ...state.recentPlayList],
      };
    case ADD_PLAYLIST:
      const list = state.playlists.find(
        (song) => song.id === action.payload.id
      );
      return {
        ...state,
        Add_PlayList: list
          ? [...state.Add_PlayList]
          : [...state.Add_PlayList, action.payload],
      };
    case REMOVE_PLAYLIST:
      const removelist = state.Add_PlayList.filter(
        (song) => song.id !== action.payload
      );
      return {
        ...state,
        Add_PlayList: removelist,
      };
    default:
      return state;
  }
};
