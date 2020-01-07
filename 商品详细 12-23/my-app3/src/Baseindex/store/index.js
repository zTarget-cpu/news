import {createStore,combineReducers,applyMiddleware} from 'redux'

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import users from './reducer/users'
import items from './reducer/items'

let reducers = combineReducers({
    users,
    items
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))  
)
export default store;