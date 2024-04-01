import axios from 'axios';
import { BASE_URL } from '../const';

// export const getTableRow = async (findItem = '', page = 1 , filters = {}) => {
//   const params = new URLSearchParams(filters).toString();

//   const response = await axios.get(
//     `${BASE_URL}/todo?title_like=${findItem}&_page=${page}&_limit=5${params}`
//   );

export const getTableRow = async (findItem = '', page = 1, filters = {}) => {
  // {key:value,key1:value1}
  // [[key,value],[key1,value1]]

  // const filteredParams = Object.fromEntries(
  //   Object.entries(filters).filter((item) => item[1] !== '')
  // );
  const params = new URLSearchParams(filters).toString();

  const response = await axios.get(
    `${BASE_URL}/todo?title_like=${findItem}&_page=${page}&_limit=5&${params}`
  );

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
