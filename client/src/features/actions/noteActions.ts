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

export const getAllNotesApiCall = (search: string) => {
  return async (dispatch: any) => {
    API.get(`${endPoints.note}/?tag=${search}`)
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

export const deleteNoteApiCall = (id: string, navigate: any) => {
  return async (dispatch: any) => {
    API.delete(`${endPoints.note}/${id}/`)
      .then((response) => {
        toast.success("deleted successfully!");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const shareNoteApiCall = (data: any) => {
  return async (dispatch: any) => {
    API.post(`${endPoints.shareNote}/`, data)
      .then((response) => {
        toast.success("shared successfully");
      })
      .catch((error) => {
        toast.error("something went wrong!");
      });
  };
};
