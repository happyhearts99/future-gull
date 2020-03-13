import React from 'react'

const Product = ({ price, quantity, name, imageURL, bulkAmount, bulkTotalPrice, subtotal, onAddToCartClicked }) => (
  <div style={{marginLeft:"5%", padding:"10px 0px 10px 0px"}}>
  	{imageURL ? <div style={{display: "inline-block",width:"40%"}}><img src={imageURL} width="120px" height="120px"/></div>:null}
      <div style={{display: "inline-block",width:"quantity?100%:60%"}}><div style={{verticalAlign:"top",display:"inline-block",width:"190px"}}>{name} {quantity ? ` x ${quantity}`:''}</div>
       {quantity ? <div style={{display:"inline-block",width:"220px",textAlign:"right"}}> -------------${subtotal} </div>: <div><p> ${price} {bulkAmount ? `or ${bulkAmount} for $${bulkTotalPrice}` : null} </p>
        <button onClick={onAddToCartClicked}>Add To Cart</button> </div>}
      </div>
  </div>
)


export default Product
