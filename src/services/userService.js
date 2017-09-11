import request from '../utils/request';

export async function queryUserList() {
  return request('/api/users', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    //body: JSON.stringify(payload),
    cache: 'no-cache'
  });
}


