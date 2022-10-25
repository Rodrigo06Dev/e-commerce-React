import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllProductCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {

  const [total, setTotal] = useState()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getAllProductCart())
  },[])


  useEffect(() => {
    if(cart) {
      const result = cart.products.reduce((acc, cv) => {
        return acc + Number(cv.price) * cv.productsInCart.quantity
      }, 0)
      setTotal(result)
    }
  }, [cart])


  const handlePurchases = () => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios
      .post(url,data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
        setTotal(0)
      })
      .catch(err => console.log(err))
      
  }

  return (
    <div className="cart">
      <div className="cart__container">
      {
        cart?.products.map(product => (
            <CartProduct
              key={product.id}
              product={product}
            />
        ))
      }
      </div>
      <h2>Total: ${total}</h2>
      <button onClick={handlePurchases}>Buy Now</button>
    </div>
  )
}

export default Cart