// SWR fetcher function

const getFetcher = (url: string | Request | URL) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('获取数据失败');
    }
    return res.json();
  });

const postFetcher = (url: string, arg: unknown) =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('提交数据失败');
    }
    return res.json();
  });

const putFetcher = (url: string, arg: unknown) =>
  fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('更新数据失败');
    }
    return res.json();
  });

const patchFetcher = (url: string, arg: unknown) =>
  fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('更新数据失败');
    }
    return res.json();
  });

const deleteFetcher = (url: string, arg: unknown) =>
  fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('删除数据失败');
    }
    return res.json();
  });

export { getFetcher, postFetcher, putFetcher, deleteFetcher, patchFetcher };
