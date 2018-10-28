---
order: 0
title: Ant Design Mobile RN of React
---

`popui-rn` 是 [Ant Design](http://ant.design) 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。

<div class="pic-plus">
  <img width="160" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block;
  vertical-align: middle;
}
.pic-plus {
  margin: 40px 0;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 40px;
}
</style>

## 特性和优势

- UI 样式高度可配置，拓展性更强，轻松适应各类产品风格
- 基于 React Native 的 iOS / Android / Web 多平台支持，组件丰富、能全面覆盖各类场景 (antd-mobile)
- 提供 "组件按需加载" / "Web 页面高清显示" / "SVG Icon" 等优化方案，一体式开发
- 使用 TypeScript 开发，提供类型定义文件，支持类型及属性智能提示，方便业务开发
- 全面兼容 react / preact

## 适用场景

- 适合于中大型产品应用
- 适合于基于 react / preact / react-native 的多终端应用
- 适合不同 UI 风格的高度定制需求的应用

## 快速上手

> 在开始之前，推荐先学习 [React](http://facebook.github.io/react/) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)。我们使用了 `babel`，试试用 [ES2015](http://babeljs.io/blog/2015/06/07/react-on-es6-plus) 的写法来提升编码的愉悦感。
>
> 确认 [Node.js](https://nodejs.org/en/) 已经升级到 v4.x 或以上。

### 1. 创建一个项目

可以是已有项目，或者是使用 create-react-native-app 新创建的空项目，你也可以从 [官方示例](https://github.com/ant-design/antd-mobile-samples/tree/master/rn-web) 脚手架里拷贝并修改

> 参考更多[官方示例集](https://github.com/ant-design/antd-mobile-samples)
> 或者你可以利用 React 生态圈中的 [各种脚手架](https://github.com/enaqx/awesome-react#boilerplates)

完整步骤请查看此处文档： [antd-mobile-sample/create-react-native-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app)

### 2. 安装

```bash
$ npm install popui-rn --save
```

### 3. 使用

组件使用实例：

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Button from '@popui/popui-rn/lib/button';

class HelloWorldApp extends Component {
  render() {
    return <Button>Start</Button>;
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

##### 按需加载

下面两种方式都可以**只加载**用到的组件，选择其中一种方式即可。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

   ```js
   // .babelrc or babel-loader option
   {
     "plugins": [
       ["import", { libraryName: "@popui/popui-rn" }] // 与 Web 平台的区别是不需要设置 style
     ]
   }
   ```

   然后改变从 popui-rn 引入模块方式即可。

   ```jsx
   import { Button } from "@popui/popui-rn";
   ```

   > 说明：有人反映通过 `react-native init` 创建的项目在使用时可能会报 [Unable to resolve module `react-dom`](https://github.com/ant-design/ant-design-mobile/issues/2054) 的错误 ，此时不妨安装 [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) 试试~

- 手动引入

   ```jsx
   import Button from '@popui/popui-rn/lib/button';
   ```

##### 更多增强 (非必须):

> [自定义 RN 主题和单个组件样式](https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui#antd-mobile-with-rn-custom-ui)
> 比如 [#1853](https://github.com/ant-design/ant-design-mobile/issues/1853)

## 版本

- 稳定版：[![npm package](http://img.shields.io/npm/v/popui-rn.svg?style=flat-square)](http://npmjs.com/package/popui-rn)
- 开发版：[![npm package](https://img.shields.io/npm/v/@popui/popui-rn/next.svg)](http://npmjs.com/package/popui-rn)

## 链接

- [首页](https://rn.mobile.ant.design/)
- [开发者文档](http://github.com/ant-design/ant-design-mobile-rn/blob/master/development.zh-CN.md)
- [React 模块](http://github.com/react-component)

## 如何贡献

在任何形式的参与前，请先阅读 [贡献者文档](https://github.com/ant-design/ant-design-mobile-rn/blob/master/.github/CONTRIBUTING.md)。有任何建议或意见您可以 [Pull Request](https://github.com/ant-design/ant-design-mobile-rn/pulls)，给我们 [报告 Bug](https://github.com/ant-design/ant-design-mobile-rn/issues/new)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

## 社区互助

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。

通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 `antd`/`popui-rn` 标签。

1. [Stack Overflow](http://stackoverflow.com/questions/tagged/antd)（推荐）
2. [Segment Fault](https://segmentfault.com/t/antd)
3. [![Join the chat at https://gitter.im/ant-design/ant-design](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
