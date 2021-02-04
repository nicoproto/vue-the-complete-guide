export default {
  loginUser(state) {
    state.isLoggedIn = true;
  },
  logoutUser(state) {
    state.isLoggedIn = false;
  },
}