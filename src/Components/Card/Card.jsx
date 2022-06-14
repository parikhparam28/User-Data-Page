import {useState,useEffect} from 'react';
import { fetchUser } from '../../Api';
import styles from './Card.module.css'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';



const OpenCard = ({Id}) => {

    let url = `https://reqres.in/api/users/${Id}`

    let [User , setUser] = useState({})
    
    useEffect(() => {
      try {
          const fetchApi = async() => {
            let data = await fetchUser(url);
            setUser(data.data)
          }
          fetchApi()
      }
      catch(error){
          return error
      }
    },[Id])


    return (
        <div className={styles.container}>
          <Card sx={{ maxWidth: 345 }} className={styles.Card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='220'
                image={User.avatar}
                alt={User.id}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {User.first_name} {User.last_name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID : {User.id} <br/>
                  First Name : {User.first_name} <br/>
                  Last Name : {User.last_name} <br/> 
                  Email : {User.email} 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      );
}

export default OpenCard;