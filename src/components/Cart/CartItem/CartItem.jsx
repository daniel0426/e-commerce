import React from 'react'
import { Typography, Button, CardActions, CardContent, CardMedia } from '@material-ui/core'
import useStyles from './styles'

const CartItem = ({item, onUpdate, onRemove}) => {

    const classes = useStyles()
    return (
        <div>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h6'> {item.name}</Typography>
                <Typography variant='subtitle1'> {item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={()=> onUpdate(item.id, item.quantity -1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={()=> onUpdate(item.id, item.quantity +1)}>+</Button>
                </div>
                <Button  variant='contained' type='button' color='secondary' onClick={()=> onRemove(item.id)}>Remove</Button>
            </CardActions>
        </div>
    )
}

export default CartItem
