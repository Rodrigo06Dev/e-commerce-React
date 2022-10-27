import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../components/home/CardProducts'
import InputSearch from '../components/home/InputSearch'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {

const [inputText, setInputText] = useState('')
const [filterByText, setFilterByText] = useState()
const [selectCategory, setSelectCategory] = useState('')
const [filterByCategory, setFilterByCategory] = useState()

const products = useSelector(state => state.products)

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllProducts())
}, [])

const handleCategory = category => {
  setSelectCategory(category)
  console.log(selectCategory);
}

useEffect(() => {
  if(inputText !== '' && products){
    setFilterByText(products.filter( product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())))
    console.log(filterByText);
  }else if(selectCategory !== '' && products){
      setFilterByCategory(products.filter(product => product.category.name === selectCategory))
  }
  else{
    setFilterByText(products)
    setFilterByCategory('')
  }
}, [inputText, products, selectCategory])


  return (
    <main className="home">
      <div className="home__filter__category">
        <div className="filter__header">
          <h3 className='filter__title'>Category</h3>
          <p className='filter__symbol'>&#94;</p>
        </div>
        <ul className="category__list">
          <li className="category__item" onClick={() => handleCategory('')}>All Products</li>
          <li className="category__item" onClick={() => handleCategory('Smart TV')}>Smart TV</li>
          <li className="category__item" onClick={() => handleCategory('Computers')}>Computers</li>
          <li className="category__item" onClick={() => handleCategory('Smartphones')}>Smartphones</li>
        </ul>
      </div>
      <div className="home__container">
        <InputSearch
          setInputText = {setInputText}
          inputText = {inputText}
        />

        <div className="home__products">
          {
            filterByCategory ?
            filterByCategory?.map(product => (
              <CardProducts
                  key={product.id}
                  product = {product}
                />
            ))
            :
            filterByText?.map(product => (
                <CardProducts
                  key={product.id}
                  product = {product}
                />
              ))
          }
        </div>
      </div>
    </main>
  )
}

export default Home