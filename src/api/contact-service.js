import axios from 'axios';

import { BASE_URL as baseURL } from '../constants/constants';

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
