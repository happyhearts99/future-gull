import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products
})
    
const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getSubTotal = (quantity, price, bulkAmount, bulkPricing) => {
	if(bulkAmount && quantity>=bulkAmount) {
    	let bulkCount = Math.floor(quantity/bulkAmount);
    	return bulkCount*bulkPricing + (quantity - bulkCount*bulkAmount)*price;
    } 
    return price*quantity;
}
export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>{
    let productinfo = getProduct(state, id);
    return total + getSubTotal(getQuantity(state, id),getProduct(state, id).price,productinfo.bulkPricing?productinfo.bulkPricing.amount:0,productinfo.bulkPricing?productinfo.bulkPricing.totalPrice:0);
    },0
    )

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }))
