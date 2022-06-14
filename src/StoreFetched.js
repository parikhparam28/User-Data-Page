import { fetchAllUser } from './Api';
import addUser from './Redux-store/ActionCreator';
import store from './Redux-store/Store';

// This function stores all data to redux store from api

const StoreFetched =async() => {
    const allUsers = await fetchAllUser();
    if(allUsers)
    {
        console.log(allUsers)
        allUsers.map(User =>{
            const {id,email,firstname,lastname,avatar} = User
            const action = addUser(id,firstname,lastname,email)
            store.dispatch(action)
        })  
        console.log(store.getState())
    }
};

export default StoreFetched;