import { API } from "../../app/config/Api";
import { endPoints } from "../../app/endpoints/endpoints";
import { AUTH_LOGIN } from "../actionTypes/actionTypes";

export const authLoginApiCall = (data: any, navigate: any) => {
  return async (dispatch: any) => {
    API.post(`${endPoints.login}/`, data)
      .then((response) => {
        dispatch({
          type: AUTH_LOGIN,
          payload: response.data,
        });
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const authRegisterApiCall = (data: any, navigate: any) => {
  return async (dispatch: any) => {
    API.post(`${endPoints.register}/`, data)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
