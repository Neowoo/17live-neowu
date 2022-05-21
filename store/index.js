const state = () => ({
  loadingShow: false
})

const mutations = {
  setLoadingShow(state, trigger) {
    state.loadingShow = trigger
  }
}

export default {
  state,
  mutations
}
