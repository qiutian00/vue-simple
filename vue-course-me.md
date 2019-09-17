## vue 课程

### 使用Vue-Cli 3.0 创建一个项目

- 使用Vue UI 创建、管理项目
- 项目结构目录整理
- 初始化文件添加
- 基本配置讲解
- 跨域配置


### router详解 基础

- router-link and router-view 组件
- 路由配置

    a. 动态路由

    b. 嵌套路由 child

    c. 命名路由

    d. 命名视图：componets 来配置； <router-view name="tel" />
- js 操作router this.$router
- 重定向和别名  alias 与 path type相同

other:

vue dev tools

命名路由{name: 'home'}， 路径路由 '/home'

### router详解 进阶

- 留有组件传参： 布尔，对象，函数模式
- HTML5 Hisory 模式
- 导航守卫
- 路由元信息
- 过度效果

other:

路由的匹配规则，前面的优先级更高

路由守卫

路由独享守卫

组建内守卫：beforeRouterEnter beforeRouterLeave


### 状态管理1

组件间的通讯： 父组件通过属性来传递给子组件 ，而子组件通过事件的方法

不同页面之间的组件参数传递： this.$bus.$emit  or this.$bus.$on


### 状态管理2 Vuex  ** import **

基础一-state&getter
基础二-mutation&action&module

### Vuex 中进阶

插件持久化state

严格模式

vuex & 双向绑定： 定义set,get 或者 重现实现v-module

### ajax 请求实战

跨域的配置： 两种解决方案

axios 请求的封装

###  第三方js库的使用

- 组件封装的基础
- 组件中使用id值 this.uid
- 组件中获取DOM

this.$refs ...

使用到了watch： 监听了props属性


### 开发实战  SplitPane组件谈Vue

- 简单的两列布局
- 如何让两个div改变宽度
- 鼠标拖动效果
- v-model和sync的用法

### 渲染函数和JSX

- render函数: style, attrs, props, on, nativeOn, 'class',directives
- 函数式组件
- JSX
- 作用域插槽



