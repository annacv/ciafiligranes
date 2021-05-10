export const state = () => ({
  sidenav: false
})

export const mutations = {
  toggle(state) {
    state.sidenav = !state.sidenav
  }
}

export const getters = {
  getSidenavState(state) {
    return state.sidenav
  }
}
