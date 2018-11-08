# Originoo
React框架的网站

该项目是一个react框架的项目，设计图是参考[Originoo](www.originoo.com)来写的。

项目结构：
```
app
 ++actions
 ++components
 ++containers
 ++mock
 ++modules
 ++reducers
 ++routers
 ++App.js
 ++index.js
 ++index.temp.html
build
.babelrc
.gitgnore
package.json
webpack.config.js

```
### build/ (禁止提交)
build 目录是编译后的代码，项目的最终运行目录

### .babelrc
babel 编译的配置文件

### .gitgnore
git 忽略文件

### package.json
包管理文件

### webpack.config.js
webpack 配置文件

### app/
app目录是存放所有的业务代码

#### actions
actions 一般用于处理http请求

#### components
components 存放一些公用的组件，例如Img，Logo

#### containers
containers 存放业务模块代码

#### mock
mock 模拟数据

#### reducers
reducers redux

#### routers
routers 路由管理

