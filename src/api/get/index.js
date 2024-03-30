import axios from 'axios';
import { BASE_URL } from '../const';

export const getTableRow = async () => {
  const response = await axios.get(`${BASE_URL}/todo`);
  return response.data;
};
