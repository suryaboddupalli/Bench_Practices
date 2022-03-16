import { fetch, userData } from "./Action";

type states = {
  Users: userData[];
};

type fetchusers = {
  type: fetch.FETCH_DATA;
  payload: userData[];
};
type fetchuser = {
  type: fetch.FETCH_SINGLE;
  payload: userData;
};

type state = {
  user: userData;
};

const initialStates: states = {} as states;
const initialState: state = {} as state;

export const UsersReducer = (state = initialStates, action: fetchusers) => {
  switch (action.type) {
    case fetch.FETCH_DATA:
      return { ...state, Users: action.payload };
    default:
      return state;
  }
};

export const UserReducer = (state = initialState, action: fetchuser) => {
  switch (action.type) {
    case fetch.FETCH_SINGLE:
      return { ...state, User: action.payload };
    default:
      return state;
  }
};
