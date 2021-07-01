import { combineReducers } from "redux";
import favoriReducer from './reducers/favoriReducer'
const rootReducer =combineReducers({
    favori:favoriReducer
})
//combine birleştirir
export default rootReducer;