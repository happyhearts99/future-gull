import React from 'react'
import Product from './Product'
import {getSubTotal} from '../reducers/'
const Cart  = ({ products, total ,onCheckoutClicked }) => {

  const productNodes = (
    products.map(product => 
       <Product
        name={product.name}
        quantity={product.quantity}
        price={product.price}
        bulkAmount={product.bulkPricing?product.bulkPricing.amount:null}
        bulkTotalPrice={product.bulkPricing?product.bulkPricing.totalPrice:null}
        subtotal = {getSubTotal(product.quantity,product.price,product.bulkPricing?product.bulkPricing.amount:null,product.bulkPricing?product.bulkPricing.totalPrice:null)}
        key={product.id}
      />
    )
  ) 
  return (
    <div style={{display:"inline-block",width:"50%",float:"left", height:"320px"}}>
      <div style={{border:"solid 1px black",marginRight:"20%",padding:"20px", height:"100%"}}>
      <h3 style={{textAlign:"center"}}>Cart</h3>
      <div style={{border:"black solid 1px", padding:"10px 0px 10px 0px", height:"200px"}}>
      <div >{productNodes}</div>
      <div style={{marginLeft:"20px",position:"absolute",bottom:"55%",width:"100%"}}><div style={{display:"inline-block", width:"27%"}}>Total</div><div style={{display:"inline-block"}}>${total}</div></div>
      </div>
      
      <div style={{textAlign:"center",marginTop:"20px"}} ><button onClick={onCheckoutClicked}>
        Checkout
      </button></div>
      </div>
    </div>
  )
}


export default Cart
