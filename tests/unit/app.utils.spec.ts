import { areOfCircle, getPromise, square } from '@/utils/app.utils';
import { assert, expect, should as shouldFn } from 'chai';

interface SquareTestModel {
  input: number;
  result: number;
}

const testParameterizedData: SquareTestModel[] = [
  {
    input: 1,
    result: 1,
  },
  {
    input: -5,
    result: 25,
  },
  {
    input: 7,
    result: 49,
  },
];

describe('app.utils should', () => {
  testParameterizedData.forEach((d) => {
    it(`return square of ${d.input}: assert`, () => {
      //  arrange & act
      const result = square(d.input);
      //  assert
      assert.equal(result, d.result);
    });
  });

  it('returns the area of circle', () => {
    const area = areOfCircle(8);
    expect(area).to.be.approximately(200.9, 1.062);
  });

  it('throws the exception for negative radius', () => {
    // assert.throws(() => areOfCircle(-7), Error);
    expect(() => areOfCircle(-7)).throw(Error);
  });

  it('resolves the promise in async', async () => {
    const result = await getPromise();
    expect(result).to.be.a.string('Good day!');
  });

  it('resolves the promise in old approach', () => {
    return getPromise().then((v) => {
      expect(v).to.be.a('string');
    });
  });
});
