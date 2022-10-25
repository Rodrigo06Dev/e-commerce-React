import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../components/home/CardProducts'
import InputSearch from '../components/home/InputSearch'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {

const [inputText, setInputText] = useState('')
const [filterByText, setFilterByText] = useState()

const products = useSelector(state => state.products)

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllProducts())
}, [])

useEffect(() => {
  if(inputText !== '' && products){
    setFilterByText(products.filter( product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())))
  }else{
    setFilterByText(products)
  }
}, [inputText, products])


  return (
    <main className="home">
      <InputSearch
        setInputText = {setInputText}
        inputText = {inputText}
      />
      <div className="home__container">
        {
          filterByText?.map(product => (
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