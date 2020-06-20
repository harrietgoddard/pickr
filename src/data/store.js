import { createStore } from "redux";
import reducer from "./reducer";
import initial from "./initial";

// setup store
const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;