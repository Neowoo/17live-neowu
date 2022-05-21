const state = () => ({
  listInfo: [
    {id: 1, content: '我有一個item'},
    {id: 2, content: '我有一個item2'}
  ]
})

const mutations = {
  // increment(state) {
  //   state.counter++
  // }
  addInfo(state, content) {
    state.listInfo.push(content)
  },
  deleteInfo (state, index) {
    state.listInfo.splice(index, 1)
  }
}


const actions = {
  addListInfo ({ commit }, content) {
    // 開啟loading
    commit('setLoadingShow', true, {root: true})
    setTimeout(() => {
      commit('addInfo', {
        id: Math.random(),
        content: content
      })
      // 關閉loading
      commit('setLoadingShow', false, {root: true})
    }, 1000)
  },
  deleteListInfo ({state, commit}, id) {

    commit('setLoadingShow', true, {root: true})
    setTimeout (() => {
      const index = state.listInfo.findIndex(item => item.id === id)
      commit('deleteInfo', index)
      commit('setLoadingShow', false, {root: true})
    }, 1000)
  }
}

export default {
  state,
  mutations,
  actions
}

