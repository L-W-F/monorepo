import { Encrypt } from '../src/encrypt';

const encrypt = Encrypt.create();

test('encrypt', () => {
  expect(encrypt.encode(0)).toBe('A');
  expect(encrypt.decode('A')).toBe(0);
  expect(encrypt.encode(1)).toBe('B');
  expect(encrypt.decode('B')).toBe(1);
  expect(encrypt.encode(Number.MAX_SAFE_INTEGER)).toBe('pPqxN7coH');
  expect(encrypt.decode('pPqxN7coH')).toBe(Number.MAX_SAFE_INTEGER);
});
