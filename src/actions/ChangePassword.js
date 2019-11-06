const changePassword = payload => {
    return {
      type: "CHANGE_PASSWORD",
      payload
    };
  };
  
  const changePasswordSuccess = payload => {
    return {
      type: "CHANGE_PASSWORD_SUCCESS",
      payload
    };
  };
  
  const changePasswordError = changePasswordError => {
    return {
      type: "CHANGE_PASSWORD_FAILURE",
      payload: {
        error: true,
        errorCode: changePasswordError.data.code,
        errorDetailLogin: changePasswordError.data.data.message
      }
    };
  };

  export {
    changePassword,
    changePasswordError,
    changePasswordSuccess
    //   createUser,
    //   updateColumn,
    //   requestCreateUsersSuccess
  };