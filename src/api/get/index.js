import axios from 'axios';
import { BASE_URL } from '../const';

export const getTableRow = async (findItem = '', page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/todo?title_like=${findItem}&&_page=${page}&_limit=5`
  );
  // console.log(Math.ceil((response.headers["x-total-count"])/5) )

  return {
    data: response.data,
    totalPage: Math.ceil(response.headers['x-total-count'] / 5),
  };
};
