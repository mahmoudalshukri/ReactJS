import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers';
import debounce from "lodash/debounce";
function loadState(){
    try{
        const state = localStorage.getItem('cart');
        if(state !== null){
            return JSON.parse(state);
        }
    }
    catch(e){
        // ignore errors
    }
    return {
        cart:[]
    }
}
function saveState(state){
    localStorage.setItem('cart',JSON.stringify(state));
}
const appReducer = combineReducers({
    cart : cartReducer,
})
const store = createStore(appReducer, loadState(),compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
store.subscribe(debounce(() => {
    saveState(store.getState());
}, 2000 ))
export default store;