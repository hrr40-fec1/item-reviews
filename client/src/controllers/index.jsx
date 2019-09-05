import axios from 'axios';

export default async () => {
  const response = await axios('/api/product/reviews');
  return response;
};
