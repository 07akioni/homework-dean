# 作业说明
## 如果你不能以正确的格式阅读这篇文档
请打开`https://github.com/07akioni/homework-dean`查看
## 关于测试整个作业
由于本人使用 mac 开发，我只能尽力的解决这个项目在 windows 上的运行问题，请尽量确保 windows 上安装的依赖和我所写的版本一致，否则 npm 在安装某些依赖的时候，会出现奇怪的问题（我不具体写出现的原因了）。
## 万一出错
如果你按照文档操作，依然出现了错误，请联系我，我在`程序设计思维`群里，昵称叫`hrsonion`。
## 配置过程
### 依赖
node.js v8.9.3 参考安装地址：`https://npm.taobao.org/mirrors/node/v8.9.3/node-v8.9.3-x64.msi`
如果参考的安装地址软件版本和你的系统不匹配，请自行寻找正确的软件包
Windows 7 我是在 Windows 7 上进行测试的
### 开始
这一步预计时间：2min(网络状态良好)
```
$ cd homework-dean-master\dean-backend
$ npm install
```
这一步预计时间：2min(网络状态良好)
```
$ cd homework-dean-master\dean-frontend
$ npm install
```
```
$ cd homework-dean-master
$ node start.js
```
等待浏览器启动，就成功了
如果浏览器没有启动，那么就受累手动访问一下 localhost:8000 吧
出错的话请联系我
### 备注
数据库文件我已经放在作业里了
不过为了防止不测 `https://github.com/07akioni/homework-dean/releases/download/0.0.1/course.db` 是一个备份
