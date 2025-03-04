import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

const fetchData = async (url, method = 'GET', body = null) => {
  try {
    const options = {
      url,
      method,
      headers: { 'Content-Type': 'application/json' },
      data: body,
    };
    const { data } = await axios(options);
    return data;
  } catch (error) {
    const errorMessage = error.response
      ? `Error: status: ${error.response.status}, ${error.response.statusText}`
      : `Error: ${error.message}`;
    throw new Error(errorMessage);
  }
};

export const fetchApi = {
  getData: dataParams => {
    const params = new URLSearchParams(dataParams).toString();
    return fetchData(`${BASE_URL}/?${params}`);
  },
  getCamperById: id => fetchData(`${BASE_URL}/${id}`),
  createData: dataBody => fetchData(BASE_URL, 'POST', JSON.stringify(dataBody)),
  updateData: (id, dataBody) =>
    fetchData(`${BASE_URL}/${id}`, 'PUT', JSON.stringify(dataBody)),
  deleteData: id => fetchData(`${BASE_URL}/${id}`, 'DELETE'),
};
