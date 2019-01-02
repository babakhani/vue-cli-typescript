import Server from '@/service/server'
export default {
  namespaced: true,
  state: {
    siginLoading: false,
    isAuthenticated: false
  },
  getters: {
    isAuthenticated (state: any) {
      return state.isAuthenticated
    }
  },
  actions: {
    signIn (context: any, payload: any) {
      let promise = Server.SampleGet()
      context.state.siginLoading = true
      promise.then((response: any) => {
        context.state.siginLoading = false
        console.log(response)
        context.commit('SignIn', payload)
      })
      promise.catch(() => {
        context.state.siginLoading = false
      })
      return promise
    },
    signOut (context: any, payload: any) {
      context.commit('SignOut', payload)
    }
  },
  mutations: {
    SignIn (state: any, payload: any) {
      state.isAuthenticated = payload
    },
    SignOut (state: any, payload: any) {
      state.isAuthenticated = payload
    }
  }
}
