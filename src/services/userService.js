import request from '../utils/request';

export async function queryUserList() {
  return request('/account/queryAccountList', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      pageNum: 1,
      pageSize: 10,
      username: ""
    }),
    cache: 'no-cache'
  });
}


