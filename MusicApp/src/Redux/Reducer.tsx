import { Data } from "./Action";
import { GET_DATA } from "./Action";
import { actionData } from "./ActionTypes";

const initialState = {
  song: [],
};

export const songReducer = (state = initialState, action: actionData) => {
  switch (action.type) {
    case GET_DATA:
      return { song: action.payload };
  }
};
