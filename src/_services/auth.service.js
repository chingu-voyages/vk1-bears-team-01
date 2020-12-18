import axios from "axios";

const url = "http://localhost:5000";

const login = async (loginInfo) => {
  const result = axios
    .post(url + "/api/auth/login", loginInfo)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token, user } = res.data;
      // console.log(`Response is: ${JSON.stringify(res.data)}`);
      if (res.status === 200) {
        return {
          type: "success",
          token,
          user,
        };
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        return {
          type: "error",
          message: "login failed",
        };
      }
    });

  return result;
};

export const authService = {
  login,
};
