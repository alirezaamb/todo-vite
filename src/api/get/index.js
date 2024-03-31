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








// Define the resource you want to query

// Define the filter criteria as query parameters
// const filters = {
// name: 'John',
// age_gte: 30
// };

// // Build the URL with the query parameters
// const url = `${BASE_URL}?${new URLSearchParams(filters)}`;

// // Make the GET request to fetch filtered data
// axios.get(url)
// .then(response => {
// // Handle the response data
// console.log(response.data);
// })
// .catch(error => {
// // Handle errors
// console.error('Error fetching data:', error);
// });