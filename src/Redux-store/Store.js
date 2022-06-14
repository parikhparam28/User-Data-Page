import userListing from './Reducer';
const Redux = require('redux')
const {createStore , combineReducers} = Redux;



// action creator : {addUser}
// reducer : {userListing}
// redux store : below
const userDataStore = combineReducers({
    userListing : userListing,
})

const store = createStore(userDataStore)
export default store;
