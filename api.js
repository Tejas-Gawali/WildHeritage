import axios from 'axios';

const API_BASE_URL = 'https://your-api-url'; // Replace with your API URL

export const fetchEndangeredSpecies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/endangered-species`);
    return response.data;
  } catch (error) {
    console.error('Error fetching endangered species:', error);
    return [];
  }
};
