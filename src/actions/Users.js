const loadUsers = () => {
  return {
    type: "LOAD_USERS"
  };
};

const requestDataUsersSuccess = payload => {
  return {
    type: "REQUEST_DATA_USERS_SUCCESS",
    payload
  };
};

const changePassword = payload => {
  return {
    type: "CHANGE_PASSWORD",
    payload
  };
};

// const createUser = payload => {
//   return {
//     type: "CREATE_USER",
//     payload
//   };
// };

// const requestCreateUsersSuccess = payload => {
//   return {
//     type: "REQUEST_CREATE_USER_SUCCESS",
//     payload
//   };
// };

// const updateColumn = payload => {
//   return {
//     type: "UPDATE_COLUMN",
//     payload
//   };
// };

export {
  loadUsers,
  requestDataUsersSuccess,
  changePassword
  //   createUser,
  //   updateColumn,
  //   requestCreateUsersSuccess
};
