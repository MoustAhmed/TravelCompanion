import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone'
import PersonIcon from '@material-ui/icons/Person';
import Rating  from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({place}) =>{
    const classes = useStyles();
    return(
        <Card elevation={6}>
            <CardMedia
                style = {{height: 360}}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}
            />
        <CardContent>
        
            <Typography gutterBottom variant = "h5">{place.name}</Typography>
            <Box display = "flex" justifyContent="space-between">
                <Rating value={Number(place.rating)} readOnly/>
                <Typography gutterBottom variant = "subtitle1">Out of {place.num_reviews} reviews</Typography>
            </Box>
            <Box display = "flex" justifyContent="space-between">
                <Typography variant = "subtitle1">Price</Typography>
                <Typography gutterBottom variant = "subtitle1">{place.price}</Typography>
            </Box>

            <Box display = "flex" justifyContent="space-between">
                <Typography variant = "subtitle1">Ranking</Typography>
                <Typography gutterBottom variant = "subtitle1">{place.ranking}</Typography>
            </Box>
            
            {place?.cuisine?.map(( {name} ) => (
        
                <Chip key ={name} size = "small" label = {name} className = {classes.chip}/>

            ))}


            
            {place?.address && (
                <Typography gutterBottom variant = "body2" color = "textSecondary" className ={classes.subtitle}>

                <LocationOnIcon /> {place.address}


                </Typography>
            )}
            
            {place?.phone && (
                <Typography gutterBottom variant = "body2" color = "textSecondary" className ={classes.spacing}>

                <PhoneIcon/> {place.phone}


                </Typography>
            )}
            <CardActions>
                <Button size = "small" color="primary" onClick = {()=> window.open(place.web_url, '_blank')}>

                    Trip Advisor

                </Button>

                <Button size = "small" color="primary" onClick = {()=> window.open(place.website, '_blank')}>

                    Website

                </Button>

            </CardActions>
        </CardContent>

        </Card>


    );
}

export default PlaceDetails;