import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import flashReducer from "./flashMessageReducer";

export default combineReducers({
  flashMessages: flashReducer,
  form: formReducer
});
