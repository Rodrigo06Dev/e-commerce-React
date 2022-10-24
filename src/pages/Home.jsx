import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../components/home/CardProducts'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/home.css'
const Home = () => {

const products = useSelector(state => state.products)

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllProducts())
}, [])


  return (
    <main className="home">
      <div className="home__container">
        {
          products?.map(product => (
            <CardProducts
              key={product.id}
              product = {product}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home