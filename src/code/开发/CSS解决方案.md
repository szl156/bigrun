---
icon: edit
date: 2023-01-11
category:
  - 笔记
  - 学习
tag:
  - 开发
---
# 解决方案

## 块盒居中

### 水平居中

1. 元素确定宽高以后，通过设置左右外边距水平居中
2. 子绝父相 + `left:50%` + `margin-left:-子元素宽度`
3. 子绝父相 + `left:50%` + `transform:translateX(-50%)`
4. `text-align:center`+`display:inline-block`
5. 父元素：`display:flex`+`justify-content:center`  ***推荐***

### 垂直居中

1. 子元素`display:inline-block`+父子元素行高一样
2. `display:flex`+子元素：`align-shelf:center`
3. 父元素`display:flex`,`justify-content:center`;`align-item:center`

### 水平垂直居中

1. 子绝父相 + `top:50%` + `left:50%` + transform:translate(-50%,-50%)
2. 子绝父相 + top:0;left:0;right:0;bottom:0; + margin:auto;
3. 父元素`display:table`,子元素`display:table-cell`

## BFC

### 什么是BFC

- BFC(Block formatting context)直译为“块级格式化上下文”。BFC它是一个独立的渲染区域，只有Block-level box（块元素）参与，它规定了内部的Block-level box如何布局，并且与这个区域外部毫不相关。
- 可以理解成：创建了 BFC的元素就是一个独立的盒子，里面的子元素不会在布局上影响外面的元素（里面怎么布局都不会影响外部），BFC仍属于文档中的普通流
- 不是所有的元素，模式都能产生BFC

### BFC的布局规则

- 内部的Box会在垂直方向，一个接一个地放置。
- Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。
- 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC的区域不会与float box重叠。
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算BFC的高度时，浮动元素也参与计算。

### 如何创建BFC

- float的值不是none。
- position的值不是static或者relative
- display的值是inline-block、table-cell、flex、table-caption或者inline-flex
- overflow的值不是visible

### BFC的作用

- 利用BFC避免margin重叠
- 清除浮动的影响
- 防止文字环绕
