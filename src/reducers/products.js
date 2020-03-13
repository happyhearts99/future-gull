import { combineReducers } from 'redux'

const byProductId = (state = {}, action) => {
  switch (action.type) {
    case 'GETPRODUCTS':
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: {...state[productId]}
        }
      }
      return state
  }
}
const ids = (state = [], action) => {
  switch (action.type) {
    case 'GETPRODUCTS':
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byProductId,
  ids,
})


export const getProduct = (state, id) =>
  state.byProductId[id]

export const getAllproducts = state =>
  state.ids.map(id => getProduct(state, id))
