import React, {useState} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetials'


import useStyles from './styles';
import { PlaceOutlined } from '@material-ui/icons';

const List = ({places}) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');


    return(
        <div className={classes.container}>

            <Typography variant="h4"> Restaurants, Hotels & Attractions around you!</Typography>
            <FormControl className={classes.formControl}>
                <inputType>Type</inputType>
                <Select value={type} onChange={(e) => setType(e.target.value)} >
                    <MenuItem value = "Restaurants">restaurants</MenuItem>
                    <MenuItem value = "Hotels">Hotels</MenuItem>
                    <MenuItem value = "Attractions">Attractions</MenuItem>

                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <inputType>Rating</inputType>
                <Select value={rating} onChange={(e) => setRating(e.target.value)} >
                    <MenuItem value = {0}>All</MenuItem>
                    <MenuItem value = {3}>Above 3.0</MenuItem>
                    <MenuItem value = {4.5}>Above 4.5</MenuItem>

                </Select>
            </FormControl>
            <Grid container spacing = {3} className={classes.list}>
                
                {places?.map((place, i) => (
                    <Grid item key = {i} xs= {12}>

                        <PlaceDetails place = {place}/>

                    </Grid>

                ))}
            </Grid>
        </div>  
    );
}

export default List;