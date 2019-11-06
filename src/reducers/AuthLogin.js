const authLoginReducer = (state = [], action) => {
  switch (action.type) {
    case "REQUEST_ERROR_LOGIN":
      return {
        ...state,
        error: action.payload.error,
        errorCode: action.payload.errorCode,
        errorDetailLogin: action.payload.errorDetailLogin
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default authLoginReducer;
