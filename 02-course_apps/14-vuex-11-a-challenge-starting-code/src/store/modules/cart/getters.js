export default {
  products(state) {
    return state.products;
  },
  cart(state) {
    return state.cart;
  },
  totalSum(state) {
    return state.cart.total.toFixed(2);
  },
}