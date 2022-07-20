import {calc} from './calculator';

it ('should get sum numbers', () => {
    const result = calc('1 + 3')
    expect(result).toEqual('1 + 3 = 4')
});

it('should get difference of numbers', () => {
  const result = calc('3 - 1');
  expect(result).toEqual('3 - 1 = 2');
});

it('should get multiplication of numbers', () => {
  const result = calc('2 * 3');
  expect(result).toEqual('2 * 3 = 6');
});

it('should get division of numbers', () => {
  const result = calc('9 / 3');
  expect(result).toEqual('9 / 3 = 3');
});

it('should get division of numbers', () => {
  const result = calc(9 / 3);
  expect(result).toEqual(null)
});