import axios from "axios";
import { getDataStore } from "../utils/store";

const instance = axios.create({
  baseURL: "https://sbx-account.payme.vn"
});

instance.interceptors.request.use(
  function(config) {
    const dataStore = getDataStore("session", "login");
    if (dataStore !== null) {
      config.headers.authorization = "Bearer " + dataStore;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const callApiLogin = credentials => {
  //   credentials.grant_type = process.env.REACT_APP_GRANT_TYPE;
  //   credentials.client_id = process.env.REACT_APP_CLIENT_ID;
  //   credentials.client_secret = process.env.REACT_APP_CLIENT_SECRET;
  //   credentials.scope = process.env.REACT_APP_SCOPE;

  return new Promise((resolve, reject) => {
    instance
      .post("/Account/Login", credentials)
      .then(response => {
        console.log("response", response);
        response.data.code !== 1000 ? reject(response) : resolve(response);
      })
      .catch(error => reject(error));
  });
};

const callApiLogout = () => {
  return new Promise((resolve, reject) => {
    instance
      .get("/api/logout")
      .then(function(response) {
        resolve(response.data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

const callApiLoadUsers = () => {
  return new Promise((resolve, reject) => {
    instance
      .get("/Account/Information")
      .then(response => {
        console.log("response", response);
        response.data.code !== 1000 ? reject(response) : resolve(response);
      })
      .catch(error => reject(error));
  });
};

const callApiChangePassword = () => {
  return new Promise((resolve, reject) => {
    instance
      .put("/Account/ChangePassword")
      .then(response => {
        console.log("response", response);
        response.data.code !== 1000 ? reject(response) : resolve(response);
      })
      .catch(error => reject(error));
  });
};

// const callApiCreateUser = dataForm => {
//   return new Promise((resolve, reject) => {
//     instance
//       .post("/api/users", dataForm)
//       .then(function(response) {
//         resolve(response.data);
//       })
//       .catch(function(error) {
//         reject(error);
//       });
//   });
// };

export { callApiLogin, callApiLogout, callApiLoadUsers, callApiChangePassword };
