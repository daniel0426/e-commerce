import React from 'react'
import {Container, Typography,Button,Grid} from '@material-ui/core';
import useStyles from './styles'
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({cart, onUpdate, onRemove, onEmpty}) => {
    const classes = useStyles()

    const EmptyCart = ()=> (
            <Typography variant="subtitle1">You have no items in your shopping cart, 
                <br/>
                <Link to='/' className={classes.link}>start adding some!</Link>
            </Typography>
    )

    const FilledCart = ()=> {
        return <>
            <Grid container spacing={6}>
                {cart.line_items.map((item)=> (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <CartItem item ={item} onUpdate={onUpdate} onRemove={onRemove} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h5"> 
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size='medium' type='button' variant="contained" color="secondary" onClick={onEmpty}>Empty Cart</Button>
                        <Button component={Link} to ='/checkout' className={classes.checkoutButton} size='medium' type='button' variant="contained" color="primary">Checkout</Button>
                    </div>
            </div>
        </>
    }

    if(!cart.line_items) return 'Loading...'
   

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant ='h5' gutterBottom >Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
