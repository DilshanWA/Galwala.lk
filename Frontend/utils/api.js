import axios from 'axios';

// Change this to your backend URL or local IP during dev
const BASE_URL = 'http://192.168.1.10:5000';

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/login`, { email, password });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Request failed');
  }
};
