import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

const fetchData = async config => {
  try {
    const { data } = await api(config);
    return data;
  } catch (error) {
    const errorMessage = error.response
      ? `Error ${error.response.status}: ${error.response.statusText}`
      : `Error: ${error.message}`;
    throw new Error(errorMessage);
  }
};

export const fetchApi = {
  getData: async (dataParams = {}) => {
    const params = new URLSearchParams(dataParams).toString();
    return fetchData({ method: 'GET', url: params ? `/?${params}` : '/' });
  },
  getCamperById: async id => fetchData({ method: 'GET', url: `/${id}` }),
  createData: async dataBody =>
    fetchData({ method: 'POST', url: '/', data: dataBody }),
  updateData: async (id, dataBody) =>
    fetchData({ method: 'PUT', url: `/${id}`, data: dataBody }),
  deleteData: async id => fetchData({ method: 'DELETE', url: `/${id}` }),
};
