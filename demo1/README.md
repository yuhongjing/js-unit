# 总结

## Jest支持三种方式写测试代码

* 使用`.spec.js`后缀
* 使用`.test.js`后缀
* 放在`__tests__`文件夹下

## 测试结构

* `describe`：将几个相关的测试放到一个组中（非必须）
* `test`(别名 it)：测试用例，是测试的最小单位
* `expect`：提供很多[matcher](https://deltice.github.io/jest/docs/en/expect.html)来判断方法返回值是否符合特定条件
