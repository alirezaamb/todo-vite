import axios from 'axios';
import { BASE_URL } from '../const';

export const updateTodo = (updatedData) => {
  axios
    .put(`${BASE_URL}/todo/${updatedData.id}`, updatedData)
    .then((response) => {
      console.log('Todo updated successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error updating todo:', error);
    });
};
