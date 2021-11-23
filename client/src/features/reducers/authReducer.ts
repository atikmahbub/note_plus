import jwt_decode from "jwt-decode";

const initialState = {
  email: null,
  username: "",
  authenticated: false,
  user_id: "",
  token: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "AUTH_LOGIN":
      let decoded: any = jwt_decode(action.payload.access);
      return {
        ...state,
        email: decoded.email,
        username: decoded.username,
        authenticated: true,
        user_id: decoded.user_id,
        token: decoded.jti,
      };
    default:
      return state;
  }
};

export default authReducer;
