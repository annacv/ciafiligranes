import Vue from 'vue'

export const state = () => ({
  lang: 'es'
})

export const mutations = {
  setData(state, { storage, key, data }) {
    Vue.set(storage, key, data)
  }
}
