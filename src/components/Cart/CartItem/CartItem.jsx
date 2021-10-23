import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import {Link} from 'react-router-dom'
import useStyles from './styles'

const CartItem = ({item, onUpdate, onRemove}) => {

    const classes = useStyles()
    console.log(item)
    return (
        <div>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h4'> {item.name}</Typography>
                <Typography variant='h5'> {item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={()=> onUpdate(item.id, item.quantity -1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={()=> onUpdate(item.id, item.quantity +1)}>+</Button>
                </div>
                <Button component={Link} to="/checkout"  variant='contained' type='button' color='secondary' onClick={()=> onRemove(item.id)}>Remove</Button>
            </CardActions>
        </div>
    )
}

export default CartItem
