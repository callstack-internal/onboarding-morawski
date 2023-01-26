import {getImgSourceById, capitalizeFirsts} from './utils';
import {BASE_URL} from '../../shared/consts';

describe('getImgSourceById', () => {
  test('it should for given id return formated source', () => {
    const id1 = 'abc';
    const src1 = getImgSourceById(id1);

    const id2 = '1!*@82';
    const src2 = getImgSourceById(id2);

    expect(src1).toBe(`${BASE_URL}/img/w/${id1}.png`);
    expect(src2).toBe(`${BASE_URL}/img/w/${id2}.png`);
  });
});

describe('capitalizeFirsts', () => {
  test('it should capitalize first letter of every word in passed string', () => {
    const singleWord = 'word';
    const capitalizedSingleWord = capitalizeFirsts(singleWord);

    const multipleWords = 'first second third fourth';
    const capitalizedMultipleWords = capitalizeFirsts(multipleWords);

    expect(capitalizedSingleWord).toBe('Word');
    expect(capitalizedMultipleWords).toBe('First Second Third Fourth');
  });
});
