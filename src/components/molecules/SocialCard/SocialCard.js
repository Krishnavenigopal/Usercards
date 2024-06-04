import React ,{useEffect, useState}from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProfilePhoto from '../../atoms/ProfilePhoto/ProfilePhoto';
import Location from '../../atoms/Location/Location';
import Phonenumber from '../../atoms/PhoneNumber/Phonenumber';
import './SocialCard.css'

export  const SocialCard = ({userData}) => {

    return (
        <Card className='card' sx={{ maxWidth: 345 }}>
            <Typography className='title' gutterBottom variant="h5" component="div">
                    {userData.name.first} {userData.name.last}
                </Typography>
            <CardContent>
            <ProfilePhoto data={userData.picture}/>
            <Location location={userData.location}/>
            <Phonenumber type='Home' phonenumber={userData.phone}/>
            <Phonenumber type='Mobile' phonenumber={userData.cell}/>
            </CardContent>
            <CardActions className='actions'>
                <Button size="small">Learn More</Button>
             </CardActions> 
        </Card>
    )
}