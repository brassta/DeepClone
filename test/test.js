import assert from 'assert';
import DeepClone from '../index.js'
import { dataProvider } from '../test-data/data-provider.js'

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("deep clone utility", () => {
  const data = dataProvider();
  const result = DeepClone(data);

  it('should return some data', () => {
    result.exist
  })
  it('should not be equal', () => {
    assert.notEqual(data, result)
  })
  it('should have same values', () => {
    assert.deepEqual(data, result)
  })
  it('should I call it asynchrnously', () => {
    async function asyncFun() {
      const localResult = await DeepClone(data);
      return localResult
    }
    asyncFun().then((result) => {
      assert.deepEqual(data, result)
    });

  })
})
