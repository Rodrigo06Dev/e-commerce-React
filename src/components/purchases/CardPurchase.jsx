import React from 'react'

const CardPurchase = ({purchase}) => {
  return (
    <article className="purchase">
        <header className="purchase__title">
            {purchase.updatedAt}
        </header>
        <div className="purchase__body">
            {
                purchase.cart.products.map(product => (
                    <section key={product.id}>
                        <h3>{product.title}</h3>
                        <div>{product.productsInCart.quantity}</div>
                        <div>{product.price * product.productsInCart.quantity}</div>
                    </section>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase