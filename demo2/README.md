# 总结

## Jest框架异步测试的支持

* expect.assertions() 确保异步方法被调用
* done 参数，jest会等待done执行的时候才结束测试
* Promise 的 resolves
* Async await 的支持

## 测试覆盖率

* --coverage 开启测试覆盖率的选项
* coverage/Icov-report/index.html 中可以看到详细的信息