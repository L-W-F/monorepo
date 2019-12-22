import { random } from '../src/random';

test('random()', () => {
  const v = {};
  for (let i = 0; i < 10000; i++) {
    const r = random();
    expect(r.length).toBe(9);
    v[r] = 1;
  }
  expect(Object.keys(v).length).toBe(10000);
});

test('random(true)', () => {
  const v = {};
  for (let i = 0; i < 10000; i++) {
    v[random(true)] = 1;
  }
  expect(Object.keys(v).length).toBe(10000);
});
