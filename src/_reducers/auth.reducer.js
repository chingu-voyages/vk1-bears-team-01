import { authConstants } from "../_constants";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  errors: {},
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        errors: {},
        loading: false,
      };
    case authConstants.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case authConstants.SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    case authConstants.LOGOUT:
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("jwtToken");

      return {
        isAuthenticated: false,
        user: {},
        loading: false,
        errors: {},
      };
    default:
      return state;
  }
};
