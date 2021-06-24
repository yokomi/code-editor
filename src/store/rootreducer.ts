import { combineReducers } from "@reduxjs/toolkit";
import darkModeReducers from "./dark-mode/reducer";

const rootReducer = combineReducers({
	darkMode: darkModeReducers,
})

export default rootReducer;