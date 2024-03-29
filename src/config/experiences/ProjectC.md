---
projectName: "兜宝精选后台"
projectTime: "2022.03 - 2023.01"
---

## 项目概述

兜宝精选后台是为兜宝用户端和商家端配置的后台管理系统，包括商城商品管理、订单管理、权限管理、分佣管理、商户管理等等。

## 技术选型

Vue2 全家桶、Element-UI

## 个人职责

- 与后端协调接口的规范,以及请求头的格式
- 在展示客户多下级时,出现下级过多会卡顿情况,采用虚拟列表渲染,使得页面不卡顿
- 用户权限管理和菜单管理与后端协调格式,在后端控制用户权限
- 让领导更加简单浏览数据,使用 Echarts 绘制每月的总订单统计、不同区域订单数和用户数等
- 在商城配置页面内,请求不同配置的接口过多,使用 p-limit 并发去请求
- 使用 Git 管理代码,保证团队开发的协作效率和代码质量

## 项目难点

- 封装可拖拽和手动上传图片组件,并进行图片压缩
- 商品分佣管理配置对象层级为四级的 JSON
- 搭建项目布局,将页面浏览过的子页面状态缓存到 Vuex 里,方便 Tab 点击切换
- 基于 Element 的 Form 组件进行二次封装，提供基于 JsonSchema 表单动态生渲染、校验、重置
