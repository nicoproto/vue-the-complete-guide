export default {
  addProductToCart(context, payload) {
    const prodId = payload.id;
    const products = context.rootGetters['products/products'];
    const product = products.find(prod => prod.id == prodId)
    context.commit('addProduct', product);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProduct', payload);
  },
}