# 总结

## Snapshot Testing 过程

* Render UI component
* 获取快照
* 和之前的快照进行比较
* 使用 --updateSnapshot 更新之前的快照

## Snapshot 其他相关知识

* Snapshot是对UI序列化之后针对对象比较，visual regression testing是针对屏幕上渲染出来的东西进行截图，像素级的比较
* Snapshot测试的结果需要随着代码一起提交