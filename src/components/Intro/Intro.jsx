import React from 'react'
import { Typography,Grid, Button  } from '@material-ui/core'
import useStyles from './styles'

const Intro = () => {
    const classes = useStyles();

    return (
        <section className={classes.intro}>
             <div className={classes.toolbar}/>
             <Grid container className={classes.introContainer}>
                 <div>
                    <Typography variant="h3" gutterBottom className={classes.title}>
                        The wise way to <br/>purchase your digital <br/>products 
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.subtitle}>
                        Creators and businesses of all sizes sell <br/> digital products, services, subscriptions, memberships, and more with All IN TECH.
                    </Typography>
                    <Button className={classes.btn} variant="contained" color='secondary' >Product features </Button>
                </div>
             </Grid>
          
        </section>
    )
}

export default Intro
