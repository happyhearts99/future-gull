import _products from '../products-data.json'

const GET_PRODUCTS = products => ({
  type: 'GETPRODUCTS',
  products
})

export const getProducts = () => dispatch => {
  dispatch(GET_PRODUCTS(_products.treats))
}

const addToShoppingCart = productId => ({
  type: 'ADDTOCART',
  productId
})

export const addToCart = productId => (dispatch, getState) => {
    dispatch(addToShoppingCart(productId));
}

export const checkout = products => (dispatch) => {
  dispatch({
    type: 'CHECKOUT'
  })
}
