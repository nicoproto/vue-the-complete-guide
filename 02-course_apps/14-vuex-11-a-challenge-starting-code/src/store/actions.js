export default {
  login(context) {
    context.commit('loginUser');
  },
  logout(context) {
    context.commit('logoutUser');
  },
}