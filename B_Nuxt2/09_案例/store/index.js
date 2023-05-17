export const state = () => ({
  token: '',
  counter: 0
});

export const mutations = {
  changeToken(state, token) {
    this.$cookies.set('token', token);
    state.token = token
  },
  getLocalToken(state) {
    state.token = this.$cookies.get('token');
  },
  increment(state) {
    state.counter++
  }
}