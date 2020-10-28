const delayPromise = require('../delayPromise');

test('delayPromise 测试 被执行', () => {
  expect.assertions(1);
  const callback = jest.fn().mockReturnValue(1);
  return delayPromise(callback).then(res => {
    expect(res).toBe(1);
  });
});