const changePasswordReducer = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_PASSWORD":
      return {
        ...state,
        ...action.httpResponse
      };

    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...state,
        ...action.httpResponse.data.data
      };

    case "CHANGE_PASSWORD_FAILURE":
      return {
        ...state,
        error: action.payload,
        errorCode: action.payload.errorCode,
        errorDetailLogin: action.payload.errorDetailLogin
      };
    default:
      return state;
  }
};

export default changePasswordReducer;
