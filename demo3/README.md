# 总结

## Jest框架 mock 方式

* jest.fn() 创建一个mock方法
* jest.spyOn() 创建mock函数
* jest.mock() 创建mock文件

## 预处理和后处理

* beforeAll/afterAll: 对测试文件中所有的用例开始前/后进行统一的预处理(一次)
* beforeEach/afterEach: 在每个用例开始前/后进行预处理(多次)