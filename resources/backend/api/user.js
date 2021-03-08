import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/user/info' + id,
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}

export function listUser(page, limit, token) {
	return request({
		url: '/api/users',
		method: 'get',
		params: { page, limit, token }
	})
}

export function update(data, token) {
	return request({
		url: '/api/users/update/' + data.id,
		method: 'post',
		data,
		params: { token }
	})
}

export function deleteUser(id, token) {
	return request({
		url:'/api/users/delete/' + id,
		method: 'get',
		params: {token}
	})
}
