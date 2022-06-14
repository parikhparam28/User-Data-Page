import {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { fetchAllUser } from '../../Api';
import styles from './Buttons.module.css'

const Buttons = ({onClickFetchUser}) => {

    const [allUsers , setUsers] = useState([])

    useEffect( () => 
    {
        try {
            const fetchApi = async() => {
                const data = await fetchAllUser();
                setUsers(data)
            }
            fetchApi();
            
        } catch (error) {
            console.log(error);
        }
    },[]);

    if(allUsers===undefined)
    {
        return null;
    }
    return (
        <div className = {styles.container}>
            {allUsers.map( (User,i) =>  
                <Button className={styles.button} key={i} value={i} onClick={(e) => {onClickFetchUser(User.id)}} >
                    {User.firstname} {User.lastname}
                </Button>
            )}
        </div>
    );
};

export default Buttons;

