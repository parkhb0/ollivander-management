import { combineReducers } from "redux";
import userSlice from "../reducers/user";
import farmSlice from "../reducers/farm";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3065";
// axios.defaults.withCredentials = true;
// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  user: userSlice.reducer,
  farm: farmSlice.reducer,
});

export default rootReducer;
