import { GET_NOTE_DETAILS, GET_NOTE_SUCCESS } from "../actionTypes/actionTypes";

const initialState = {
  allNotes: null,
  noteDetails: null,
};

const noteReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_NOTE_SUCCESS:
      return {
        ...state,
        allNotes: action.payload,
      };
    case GET_NOTE_DETAILS:
      return {
        ...state,
        noteDetails: action.payload,
      };
    default:
      return state;
  }
};

export default noteReducer;
