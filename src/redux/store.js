import { createStore } from "redux";
import rootReducers from "./reducer";
/*hold the complete state tree from app*/
const store = createStore(rootReducers);

export default store