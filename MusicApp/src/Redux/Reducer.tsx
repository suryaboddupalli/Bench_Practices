import { CURRENT_DATA } from "./Action";
import { details } from "./Action";

const initialState = {
  Current_Song: {},
};

export type song = {
  type: "CURRENT_DATA";
  payload: details;
};

export const songReducer = (state = initialState, action: song) => {
  switch (action.type) {
    case CURRENT_DATA:
      return { Current_Song: action.payload };
    default:
      return state;
  }
};
