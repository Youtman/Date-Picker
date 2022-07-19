export const state = () => ({
  date: new Date(),
  email: '',
})

export const mutations = {
  SET_EMAIL(state, email) {
    state.email = email
  },
  SET_DATE(state, date) {
    state.date = date
  },
}

export const actions = {
  SetEmail({ commit }, email) {
    // eslint-disable-next-line no-undef
    commit('SET_EMAIL', email)
  },
  SetDate({ commit }, date) {
    // eslint-disable-next-line no-undef
    commit('SET_DATE', date)
  },
  ShowData({ state }) {
    console.log({ email: state.email, date: state.date })
  },
}
