import axios from 'axios';

export const fetchAllUser = async () => 
{
    const url = 'https://reqres.in/api/users?page=2';

    try{
        const userdata= await axios.get(url)
        const {data} = userdata.data
        const allUserData =  data.map((user) =>
        ({
            id : user.id,
            email : user.email,
            firstname : user.first_name,
            lastname : user.last_name,
            avatar : user.avatar,
        }));
        return allUserData
    } catch (error) {
        console.log(error);
    }
};

export const fetchUser = async (url) => {
    try{
        const userdata = await axios.get(url)
        return userdata.data;
    }catch(error){
        console.log(error)
    }
};
