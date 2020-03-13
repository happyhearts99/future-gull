import React from 'react'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{marginLeft:"10%"}}>
    <Product
      name={product.name}
      price={product.price} 
      imageURL={product.imageURL}
      bulkAmount={product.bulkPricing?product.bulkPricing.amount:null}
      bulkTotalPrice={product.bulkPricing?product.bulkPricing.totalPrice:null}
		onAddToCartClicked={onAddToCartClicked}
      />
         
  </div>
)


export default ProductItem
