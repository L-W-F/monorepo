import { Encrypt } from './encrypt';

const { encode } = Encrypt.create();

const seed = Number.MAX_SAFE_INTEGER - 1e15 - 1e14;

/**
 * random string generator
 */
export function random(isTest: boolean = false): string {
  /* istanbul ignore next */
  if (isTest) {
    if ((random as any).random === undefined) {
      (random as any).random = 0;
    }
    return encode((random as any).random++);
  }
  // 1e15 -> Number.MAX_SAFE_INTEGER - 1e14
  return encode(1e15 + Math.floor(Math.random() * seed) + Date.now());
}
