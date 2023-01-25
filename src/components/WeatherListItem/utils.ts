import {BASE_URL} from '../../shared/consts';

export const getImgSourceById = (id: string): string =>
  `${BASE_URL}/img/w/${id}.png`;

export const capitalizeFirsts = (text: string): string =>
  text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
