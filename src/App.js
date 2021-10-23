import React, {useState, useEffect} from 'react'
import {commerce} from './lib/commerce';
import {Switch, Route} from 'react-router-dom'
import {Products, Navbar, Cart, Checkout} from './components'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart]  = useState({})
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async ()=> {
      const {data} = await commerce.products.list();
      setProducts(data);
  }

  const fetchCart = async ()=> {
    setCart(await commerce.cart.retrieve());
  }

  const addtoCartHandler = async (productId, quantity)=> {
    const {cart} = await commerce.cart.add(productId, quantity);
    setCart(cart)
  }

  const handleUpdateQuantity = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart)
  }

  const handleEmptyCart = async ()=> {
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  }

  const refreshCart = async ( )=> {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder)=> {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(incomingOrder);
      console.log('captureCheckout')
      refreshCart();
      
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }
 


  useEffect(()=> {
    fetchProducts()
    fetchCart()
  }, [])


  return (
    <div>
      <Navbar  totalItems={cart.total_items}/>
      <Switch>
        <Route exact path='/'>
          <Products products={products} onAddToCart={addtoCartHandler}/>
        </Route>
        <Route path='/cart'>
          <Cart cart={cart} onUpdate={handleUpdateQuantity} onRemove= {handleRemoveFromCart} onEmpty = {handleEmptyCart}/>
        </Route>
        <Route exact path='/checkout'>
          <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
