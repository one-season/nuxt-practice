export const state = () => ({
  token: ''
});

export const mutations = {
  changeToken(state, token) {
    state.token = token
  },
  changeFetchMsg(state, msg) {
    state.fetchMsg = msg
  }
};

export const actions = {
  // 一、服务端生命周期
  // 1.1.
  nuxtServerInit(store, context) {
    console.log('nuxtServerInit');

    // do something
    store.commit('changeToken', 'ehwqiuo32189')
  }
}