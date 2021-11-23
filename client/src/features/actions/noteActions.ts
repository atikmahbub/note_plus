import { API } from "../../app/config/Api";
import { endPoints } from "../../app/endpoints/endpoints";
import { toast } from "react-toastify";
import { GET_NOTE_SUCCESS, GET_NOTE_DETAILS } from "../actionTypes/actionTypes";

export const addNoteApiCall = (data: any, navigate: any) => {
  return async (dispatch: any) => {
    API.post(`${endPoints.note}/`, data)
      .then((response) => {
        navigate(0);
        toast.success("note added!");
      })
      .catch((error) => toast.error("something went wrong"));
  };
};

export const getAllNotesApiCall = () => {
  return async (dispatch: any) => {
    API.get(`${endPoints.note}/`)
      .then((response) => {
        dispatch({
          type: GET_NOTE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getNoteDetails = (id: string) => {
  return async (dispatch: any) => {
    API.get(`${endPoints.note}/${id}/`)
      .then((response) => {
        dispatch({
          type: GET_NOTE_DETAILS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
