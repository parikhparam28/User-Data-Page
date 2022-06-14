
// reducer

const userListing = (oldUserList = [] , action) => {
    if(action.type==="ADD_USER")
    {
        return [...oldUserList , action.payload]
    }
    return oldUserList
}

export default userListing;
