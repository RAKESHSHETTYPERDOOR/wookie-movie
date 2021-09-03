import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getReducers } from "../reducers/getReducers";

const configurestore =()=>{
 
    const store =createStore(combineReducers(
        {
          data:getReducers
        }
    ),applyMiddleware(thunk))

 return store

}
export default configurestore