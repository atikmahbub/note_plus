import { error } from "console";
import { toast } from "react-toastify";
import { API } from "../../app/config/Api";
import { endPoints } from "../../app/endpoints/endpoints";
import { GET_USERS_SUCCESS } from "../actionTypes/actionTypes";

export const getAllUserApiCall = () => {
  return async (dispatch: any) => {
    API.get(`${endPoints.users}/`).then((response) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: response.data,
      });
    });
  };
};

export const updateUserApiCall = (id: number, data: any) => {
  return async (dispatch: any) => {
    API.put(`${endPoints.users}/${id}/`, data)
      .then((resposne) => {
        toast.success("updated successfully!");
      })
      .catch((error) => toast.error("something went wrong!"));
  };
};
