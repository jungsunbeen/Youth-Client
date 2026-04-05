// 데모 모드에서는 인증 인터셉터가 필요 없음
export const getAuthAxios = (token) => {
  return {
    get: async (url, config) => ({ data: {} }),
    post: async (url, data, config) => ({ data: {} }),
    put: async (url, data, config) => ({ data: {} }),
    delete: async (url, config) => ({ data: {} }),
  };
};
