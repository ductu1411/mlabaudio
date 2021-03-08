import { login, logout, getInfo, listUser, addUser, update, deleteUser } from '@/api/user'
import { getToken, setToken, removeToken, getUserId, setUserId, removeUserId } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  id: getUserId(),
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        if(response.message === 'success') {
			commit('SET_TOKEN', data.token)
			commit('SET_ID', response.id)
			commit('SET_NAME', response.name)
			setToken(data.token)
			setUserId(response.id)
			resolve()
		} else {
        	reject(response.message)
		}
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
    	commit('SET_ROLES', ['admin'])
		resolve({})
	})
  },
	getCurrentUser({commit, state}) {
    return new Promise((resolve, reject) => {
      getInfo(getUserId(), getToken()).then(response => {
          resolve(response)
      }).catch(error => {
          reject(error)
      })
    })
  },
  getUserName({commit, state}, id) {
      return new Promise((resolve, reject) => {
        getInfo(id, getToken()).then(response => {
          resolve(response.name)
        }).catch(error => {
          reject(error)
        })
      })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  listUser({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      listUser(data.page, data.limit, getToken()).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  addUser({ commit, state }, userData) {
    return new Promise((resolve, reject) => {
      addUser(userData, getToken()).then(response => {
        if(response.message === 'success') {
          resolve('register user successful')
        } else {
          resolve('error)')
        }
      }).catch(error => {
        reject(error)
      })
    })
  },


  // update user
  updateUser({ commit, state }, userData) {
    return new Promise((resolve, reject) => {
      update(userData, getToken()).then(response => {
        if (response.message === 'success') {
          resolve('update user successful')
        } else {
          resolve('error')
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // delete user
  deleteUser({ commit, state }, id) {
    return new Promise((resolve, reject) => {
      deleteUser(id, getToken()).then(response => {
        if (response.message === 'success') {
          resolve('delete user successful')
        } else {
          resolve('error')
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
