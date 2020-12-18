import { authConstants } from "../_constants";
import { authService } from "../_services";
import jwt_decode from "jwt-decode";

const loginAction = (loginInfo) => {
  return (dispatch) => {
    authService.login(loginInfo).then((res) => {
      if (res.type === "success") {
        localStorage.setItem("jwtToken", res.token);
        const userInfo = res.user;
        const decoded = jwt_decode(res.token);
        console.log(userInfo);
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          userId: decoded,
          user: userInfo,
        });

        localStorage.setItem("isLoggedIn", true);
      } else {
        dispatch({
          type: authConstants.SET_ERRORS,
          errors: {
            type: "warning",
            message: "Email or password is incorrect!",
          },
        });
      }
    });
  };
};

export const authActions = {
  loginAction,
};
