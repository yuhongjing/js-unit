jest.mock('../getData');
const normalizeData = require('../normalizeData');
const getData = require('../getData');
getData.mockReturnValue({
  name: 'zzc'
});

test('normalizeData.js status 测试', () => {
  const status = normalizeData().status;
  expect(status).toBe(0);
});

test('normalizeData.js data 测试', () => {
  const data = normalizeData().data;
  expect(data).toEqual({
    name: 'zzc'
  });
});