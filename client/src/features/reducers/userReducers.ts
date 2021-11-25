import { GET_USERS_SUCCESS } from "../actionTypes/actionTypes";

const initialState = {
  users: null,
};

export const userReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
