export default {
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    const userRequests = state.requests.filter(request => request.coachId == coachId)
    return userRequests;
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
}