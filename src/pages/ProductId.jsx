import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/home/productId/ProductInfo'
import SimilarProduct from '../components/home/productId/SimilarProduct'
import SliderImgs from '../components/home/productId/SliderImgs'

const ProductId = () => {
  const [product, setProduct] = useState()
  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
  }, [id])

  console.log(product);
  return (
    <div>
      {product && <SliderImgs product={product}/>}
      <ProductInfo
        product={product}
      />
      <SimilarProduct
        product={product}
      />
    </div>
  )
}

export default ProductId