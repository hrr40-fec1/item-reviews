import axios from 'axios';

export default async (id) => {
  const response = await axios(`/api/product/${id}/reviews`);
  return response;
};
