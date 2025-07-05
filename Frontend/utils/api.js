import axios from 'axios';

// Change this to your backend URL or local IP during dev
const BASE_URL = 'https://288f4f89-87e6-42a9-938e-337a8e86be4a.e1-us-east-azure.choreoapps.dev';

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/login`, { email, password });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Request failed');
  }
};
