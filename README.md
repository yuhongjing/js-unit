# jest单元测试

* 基础测试
* 异步方法测试
* 依赖外部方法的测试
* Snapshot测试

## 单元测试设计原则

* 全面性
* 互斥性


## 单元测试示例

尽管此单元测试覆盖率为100%，但并不是一个优秀的单元测试。

```js
test('1+1应该等于2', () => {
    expect(add(1, 1)).toBe(2);
});
```

应该尽可能考虑多种场景，多种情况。

```js
// 一个优秀的测试用例
describe('add方法的测试', () => {
  // 正常情况
  test('1+2应该等于3', () => {
    expect(add(1, 2)).toBe(3);
  });
  // 异常输入
  test('null+2应该等于2', () => {
    expect(add(null, 2)).toBe(2);
  });
  test('null+null应该等于0', () => {
    expect(add(null, null)).toBe(0);
  });
  test('"a"+"b"应该等于NaN', () => {
    expect(add('a', 'b')).toBe(NaN);
  });
  // 隐含的需求场景
  test('1+"2"应该等于3', () => {
    expect(add(1, '2')).toBe(3);
  });
  test('"1"+2应该等于3', () => {
    expect(add('1', 2)).toBe(3);
  });
  test('0.1+0.2不应该等于0.3', () => {
    expect(add(0.1, 0.2)).not.toBe(0.3);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
})
```