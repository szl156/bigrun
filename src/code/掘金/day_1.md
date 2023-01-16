---
icon: edit
date: 2023-01-11
category:
  - 掘金
  - 学习
tag:
  - js
  - 造轮子
---

# 学习

> 原文链接：<https://juejin.cn/post/7145447742515445791#heading-9>

题主的基本思路是通过获取到Dom元素，计算鼠标的偏移量从而记录并实现demo中的拖拽和放置。并且题主还做了优化！包括回弹效果，拖拽放大，甚至有性能提升，小白膜拜。

## 写bug小能手

1. 设置祖先元素的宽高分别为100vw和100vh时，页面出现滚动条

   bug原因：浏览器有默认样式margin:8px

   解决方案：重置样式，*{margin:0}

2. 引入js时，直接在head标签进行引入，发现报错*没有addEventListener属性*

   bug原因：在head标签进行引入时，dom尚未加载，无法获取到dom元素

   解决方案：将script标签转至body标签

## 今日长见识

1. user-select属性：设置是否可以被选中以及选中的内容

2. break-inside属性：避免在`img`元素内分页

3. filter属性：调节img元素的模糊度和饱和度

4. 瀑布流的实现：使用纯CSS实现，在瀑布流的父元素设置columns

   **column实现瀑布流核心**

   - column-count：设置列数
   - column-width：设置每列宽度，列数由总宽度与每列宽度计算得出
   - column-gaps：设置列间距

   > column瀑布流，**避免断层**
   >
   > 给每一个item设置break-inside：avoid

## 自己造轮子

在玩耍题主的demo的时候，发现图片可以放上去很多张，于是想做一个**清除画布**的demo

造轮子当然也会遇到问题，比如今天我遇到的一个问题：如何获取伪类元素的Dom。

由于没有相关的知识储备，当然是选择度娘了。首先查到的是getComputedStyle这个方法，但是从这个api也能看出来，这是一个获取style样式的函数，当然取不到dom辣。很快，在我冥思苦想之际，找到了一个方法：使用CSS+JS来获取伪类元素的Dom。

具体代码如下：

```javascript
document.querySelector('#del').addEventListener("click",(e)=>{
    clear()
})
function clear(){
    let canvasImgList = document.querySelectorAll(".on_canvas")
    canvasImgList.forEach((v)=>v.remove())
}
```

```less
#del{
  pointer-events: none;
}
#del::before {
  content: url("./src/del.png");
  display: inline-block;
  float:right;
  pointer-events: auto;
}
```

其主要思路就是利用`pointer-events`这个CSS属性取消元素对于事件的行为，而伪类元素可以作出反应，那自然就可以获取到Dom了

本人小白初学，大佬轻喷
