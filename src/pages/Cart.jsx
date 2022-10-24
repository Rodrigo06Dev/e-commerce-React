import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllProductCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getAllProductCart())
  },[])

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
      <button onClick={handlePurchases}>Buy Now</button>
    </div>
  )
}

export default Cart