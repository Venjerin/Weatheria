import { applyMiddleware, combineReducers, createStore } from "redux";
import thisDayReducer from "./thisDay-reducer";
import thunk from "redux-thunk";
import tabsReducer from "./tabs-reduer";


let rootReducer = combineReducers({
    mainPage: thisDayReducer,
    tabsPage: tabsReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore

window.store = store;

export default store;