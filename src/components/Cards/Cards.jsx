import React from "react";
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

import loader from "../../res/animaiton/sphere.gif";
const Cards = ({ data : { confirmed, recovered, deaths, lastUpdate} }) => {
    console.log(lastUpdate);
    console.log(confirmed);
    if(!confirmed) {
        return <img className = "pre-loader" src={loader}></img>
    }
    
    return(
      <div className = {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant ="h5">
                            {/* {confirmed.value} */}
                            <CountUp
                                start = {0}
                                end = {confirmed.value}
                                duration={3}
                                separator=","
                            />
                        </Typography>
    <Typography colorr ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active Cases of Covid 19</Typography>
                    </CardContent>
                </Grid> 
                <Grid item component = {Card}xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant ="h5">
                            {/* {recovered.value} */}
                            <CountUp
                                start = {0}
                                end = {recovered.value}
                                duration={3}
                                separator=","
                            />
                            </Typography>
                        <Typography colorr ="textSecondary">{lastUpdate}</Typography>
                        <Typography variant="body2">Number of Recovered Cases of Covid 19</Typography>
                    </CardContent>
                </Grid> 
                <Grid item component = {Card}xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant ="h5">
                            {/* {deaths.value} */}
                            <CountUp
                                start = {0}
                                end = {deaths.value}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography colorr ="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of Death Cases of Covid 19</Typography>
                    </CardContent>
                </Grid>    
            </Grid>
      </div>
    ) 
}

export default Cards;