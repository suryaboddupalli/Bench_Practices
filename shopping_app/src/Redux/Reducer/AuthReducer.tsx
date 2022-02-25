import { logintypes, Action } from "../Actions/ActionTypes";

const initialStates = {
  user: "",
  error: "",
};

export const LoginReducer = (state = initialStates, action: Action) => {
  switch (action.type) {
    case logintypes.LOGGEDIN_SUCCESS:
      return { user: action.payload, error: "" };
    case logintypes.LOGGEDIN_FAIL:
      return { user: "", error: action.payload };
    default:
      return state;
  }
};
