import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchData = async (path, method = "GET", body = null) => {
  try {
    const options = {
      url: path,
      method,
      headers: { "Content-type": "application/json" },
      data: body,
    };
    const response = await axios(options);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        `Error: status: ${error.response.status}, ${error.response.statusText}`
      );
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
};

export const fetchApi = {
  async getData(dataParams) {
    const params = new URLSearchParams(dataParams).toString();
    const url = `${BASE_URL}/?${params}`;
    return await fetchData(url);
  },
  async createContact(dataBody) {
    const method = "POST";
    const url = `${BASE_URL}`;
    const body = JSON.stringify(dataBody);
    return await fetchData(url, method, body);
  },
  async updateData(id, dataBody) {
    const method = "PUT";
    const url = `${BASE_URL}/${id}`;
    const body = JSON.stringify(dataBody);
    return await fetchData(url, method, body);
  },
  async deleteData(id) {
    const method = "DELETE";
    const url = `${BASE_URL}/${id}`;
    return await fetchData(url, method);
  },
};
