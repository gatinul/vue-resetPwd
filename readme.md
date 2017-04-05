使用vue-router & ElementUI实现密码重置功能单页面应用

## 目录结构

```
|- build/
|- apps/ 
|- resetPwd/  --------------------------------- 项目代码
  |- components/  ----------------------------- 组件目录
    |- App.vue
    |- Step.vue  ------------------------------ 步骤条组件
    |- First.vue  ----------------------------- 第一页
    |- ...
  |- router/  --------------------------------- 路由文件配置
  |- app.js  ---------------------------------- webpack入口文件
|- views/
  |- resetPwd.html  --------------------------- HTML 模板
|- routes
  |- index.js  -------------------------------- express数据库操作
|- .babelrc  ---------------------------------- babel 配置文件
|- package.json  ------------------------------ npm 配置文件
|- server.js  --------------------------------- 项目入口文件
|- webpack.config.js  ------------------------- webpack 配置文件
```

## 需要

- [vue2.0](http://cn.vuejs.org/)
- [vue-router](http://router.vuejs.org/zh-cn/)
- [vuex](http://vuex.vuejs.org/zh-cn/intro.html)
- [ElementUI](http://element.eleme.io/#/zh-CN)
- mysql
- express

## 使用

```bash
# 启动webpack打包
npm run dev 

# 本地进行访问
localhost:8080/resetPwd.html
```

## Todo

- ~~Node+Mysql验证、存储用户及密码信息~~