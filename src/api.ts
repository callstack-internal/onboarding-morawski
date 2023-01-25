import {create} from 'apisauce';
import {BASE_URL} from './shared/consts';

export const api = create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
