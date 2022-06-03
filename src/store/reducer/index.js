import {combineReducers} from 'redux';
import OrdersReducer from "./OrdersReducer";
import ServiceReducer from "./ServiceReducer"
import NewsReducer from "./NewsReducer";

const reducer = combineReducers({
    serve: ServiceReducer,
    img: OrdersReducer,
    newsImg: NewsReducer
})

export  default  reducer;