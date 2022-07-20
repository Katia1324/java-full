import {getMinSquaredNumber} from './getMinSquaredNumber';

it ('should get squared min numbers', () =>{
    const result = getMinSquaredNumber([-777, -2, 4, 8, 9, -52])
    expect(result).toEqual([4])
});

it('should get squared min numbers', () => {
  const result = getMinSquaredNumber('yhkkk');
  expect(result).toEqual(null);
});

it('should get squared min numbers', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});