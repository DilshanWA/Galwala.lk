import axios from 'axios';

// Change this to your backend URL or local IP during dev
const BASE_URL = 'https://4d1f12ef-19f5-4f02-b0bb-a1ca6937ede7.e1-us-east-azure.choreoapps.dev';

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/login`, { email, password });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Request failed');
  }
};
