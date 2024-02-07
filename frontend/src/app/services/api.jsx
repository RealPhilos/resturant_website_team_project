import axios from 'axios';

const apiBaseUrl = '';

export const getData = async () => {
  try {
    const respone = await axios.get(`${apiBaseUrl/data}`);
    return response.data;
  } catch (errror) {
    console.error('Error fetching data:' , error);
    throw error;
  }
};

export const postData = async(data) => {
  try {
    const respone = await axios.post(`${apiBaseUrl/data}`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error
  }
};