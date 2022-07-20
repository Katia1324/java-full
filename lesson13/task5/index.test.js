import {reverseArray, withdraw, getAdults} from './index';

it ('should reverse massiv of numbers', () => {
    const result = reverseArray([1, 2, 3, 4, 5])
    expect(result).toEqusal([5, 4, 3, 2, 1])
});

it('should withdraw funds from the account', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqusal(37);
});

it('should looking for people who are over 18 years old', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqusal(-1);
});

it('should looking for people who are over 18 years old', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqusal({ Ann: 56 });
});

it('should looking for people who are over 18 years old', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqusal({ 'John Doe': 19, Bob: 18 });
});