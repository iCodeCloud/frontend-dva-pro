import request from '../utils/request';

export async function login(payload) {
  return request('/account/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload),
    cache: 'no-cache',
  });
}

