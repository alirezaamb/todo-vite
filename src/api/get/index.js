import axios from 'axios';
import { BASE_URL } from '../const';



export const getTableRow = async (findItem = $) => {
  const response = await axios.get(`${BASE_URL}/todo?title_like=${findItem}`);
  return response.data;
};
