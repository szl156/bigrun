---
icon: edit
date: 2023-01-11
category:
  - 笔记
  - 学习
tag:
  - css
---
# CSS复习

## 选择器

- 通配选择器：`*`
- 标签选择器：`tag`
- 类选择器：`.class`
- id选择器：`#id`
- 属性选择器：`[attr="value"]`
- 伪类选择器：书写顺序如下，
  - link：超链接未访问状态
  - visited：超链接访问过后的状态
  - hover：鼠标悬停
  - active：激活状态，鼠标按下
- 伪元素选择器：必须有content
  - before
  - after
- 选择器分隔：
  - 后代元素——`空格`
  - 子元素——`>`
  - 相邻兄弟元素——`+`
  - 兄弟元素——`~`
  - 多个选择器——`,`

## 层叠

1. 比较重要性

   1. `!important`关键字
   2. 作者样式表

2. 比较特殊性

      > ### **CSS 优先规则：**
      >
      > 选择器选中的范围越窄，特殊性越高
      >
      > 具体规则：通过选择器计算出一个四位数(xxxx)
      >
      > 1. 千位：内联样式记1，否则记0
      > 2. 百位：id选择器的数量
      > 3. 十位：类选择器+属性选择器+伪类选择器
      > 4. 个位：元素选择器+伪元素选择器
      >
      > !important > 内联样式 > id 选择器 > 类选择器 = 伪类选择器 = 属性选择器 > 标签选择器 = 伪元素选择器

3. 比较源次性

      代码靠下的更重要

## 盒模型

box：盒子，每个元素在页面中都会生成一个矩形区域（盒子）

### 盒子类型

1. 行盒：display：inline；不换行
2. 块盒：display：block；独占一行

### 盒子组成

由内到外依次是：

1. 内容  content
2. 填充        padding
3. 边框        border
4. 外边框    margin

> ### 盒模型bug
>
> #### 在对设计稿进行页面重构时，默认使用的内容盒可能会导致盒子*宽高*不匹配，解决方案
>
> 1. 精确计算
> 2. `box-sizing:border-box` （改变宽高的影响范围）
>
> #### 溢出处理
>
> `overflow`属性，边框盒溢出后的处理方式
>
> hidden：隐藏；scroll-y|scroll-x：生成y轴或x轴的滚动条
>
> #### 断词规则
>
> `word-break`属性，影响文字在什么位置被截断换行
>
> normal：普通，在文字或单词处截断；break-all：截断所有文字；keep-all：保持都在单词截断
>
> #### 空白处理
>
> `white-space`属性，空白字符处理方式
>
> `overflow`属性，溢出处理
>
> `text-overflow`，文本溢出处理方式
>
> ellipsis：文本溢出以省略号显示
>
> #### 空白折叠
>
> 空白折叠，发生在行盒内部或行盒之间
>
> #### 保留图片或其他媒体的比例
>
> `object-fit`属性：指定元素的内容应该如何去适应指定容器的高度与宽度
>
> contain：保持比例；fill：自动填充；cover：等比例填充；

## 视觉格式化模型

### 常规流

#### 块盒

1. 块盒的宽度auto即为父元素的宽度；块盒的高度auto是适应内容的高度

2. 除了height以外的样式，padding,margin中的百分比都是相对于父元素context的宽度

   - 父元素的context即是:
     box-sizing: content-box那么就是context的宽度；
     box-sizing:border-box 那么context的宽度就是context宽度-context的宽度

3. 上下外边距合并

   两个文档流块盒上下边距相邻会进行合并，外边距取大值

   解决方案：BFC

#### 浮动

- 应用场景：文字环绕，横向排列

- 排列方式：

  1. 左浮动的盒子靠左靠上排列；右浮动的盒子靠右靠上排列

  2. 浮动盒子在包含块中排列时，回避开常规流块盒

  3. 常规流块盒排列时，无视浮动盒子

  4. 行盒排列时会避开浮动盒子（文字环绕）

     > 若文字没有在行盒中，浏览器自动生成一个行盒包裹文字，称为匿名行盒

- 高度坍塌

  原因：常规流盒子的高度不考虑浮动盒子

  解决方案：清除浮动，`clear`属性（默认值：none；left：清除左浮动；right：清除右浮动；both：清除两侧浮动）

  ​       在父元素添加clearfix类并在伪元素中，清除浮动

#### 定位

`position`属性（**static**：默认值；**relative**：相对定位；**absolute**：绝对定位；**fixed**：固定定位；**sticky**：粘性定位）

1. relative相对定位：相对正常位置进行定位
2. absolute绝对定位：相对最近的定位祖先元素进行定位
3. fixed固定定位：相对视口定位
4. sticky粘性定位：在relative和fixed之间切换，当遇到给定的偏移位置时，固定在该点

## 伪类选择器

1. `:first-child`：第一个子元素

2. `:last-child`：最后一个子元素

3. `:nth-child(n)`：第n个子元素

4. `:nth-of-typ(n)`：第n个同父元素的子元素

   > *n* 可以是数字、关键词或公式，例如：
   >
   > odd：选中所有偶数
   >
   > an+b：表示周期的长度，n 是计数器（从 0 开始），b 是偏移值

## flex布局

1. 容器属性（父元素）
   1. flex-diraction：子元素排列方式
   2. flex-wrap：换行方式
   3. flex-flow：flex-diraction+flex-wrap
   4. justify-content：主轴（X轴）对齐方式
   5. align-items：副轴（Y轴）对齐方式
   6. align-content：设置行对齐
2. 项目属性（子元素）
   1. order：元素排列顺序
   2. align-self：覆盖容器的align-items
   3. flex：空间分配
   4. flex-grow：剩余扩展比例
   5. flex-shrink：超出收缩比例
   6. flex-basis：伸缩基准值

## grip布局

1. 容器属性（父元素）

   1. grid-template-rows/columns：需要划分的行数

      > repeat(100px,3) == 100px,100px,100px

      auto-fill：自动填充；fr：单位，译为片段；minmax(x,y)：最小值为x，最大值为y

   2. grid-template-areas：成员单元格

   3. gap：item之间的距离

   4. grid-auto-flow：放置顺序

   5. justify-content/align-items：水平，竖直对齐方式

   6. grid-auto-columns：item多余宽高

2. 项目属性（子元素）

   1. grid-column：x/m/y/n  网格线水平（x,y）竖直（m,n）
   2. grid-area：指定item区域
