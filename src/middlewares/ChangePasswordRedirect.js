import history from "../history";
import { removeStoreApplication } from "../utils/store";

const ChangePasswordRedirect = store => next => action => {
  switch (action.type) {
    case "CHANGE_PASSWORD_SUCCESS":
      removeStoreApplication("session", "login");
      history.push("/login");
      break;
    default:
      next(action);
  }
};

export default ChangePasswordRedirect;
