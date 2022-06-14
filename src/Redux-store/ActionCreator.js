
// action creator

const addUser = (id,firstname,lastname,email) =>
{
    return {
        type : "ADD_USER",
        payload : {
            id,
            firstname,
            lastname,
            email,
        },
    }
}

export default addUser;