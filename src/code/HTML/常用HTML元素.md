---
icon: edit
date: 2023-01-11
category:
  - 笔记
  - 学习
tag:
  - html
---
# 常用HTML元素

## 文本元素

### h

h1~h6：一级标题到六级标题

### p

段落元素

### span

无语义，仅用于设置样式

```html
<p>
    三原色：
    <span style="color:red">红</span>、
    <span style="color:yellow">黄</span>、
    <span style="color:blue">蓝</span>
</p>
```

效果展示：

![span](/assets/img/span.png)

- span等是行级元素，不会独占一行

- p等元素是块级元素，即独占一行

> H5弃用行级元素、块级元素的说法；全面遵循语义化原则

### pre

预格式化文本元素

- pre常用于网页中显示代码（通常使用**code**标签）

  ```html
  <code>
   <pre>
    for(var i=0;i<=10;i++){
        console.log(i);
    }
   </pre>
  </code>
  <!--上述代码可等效为下列代码-->
  <code style="white-space:pre">
   for(var i=0;i<=10;i++){
        console.log(i);
    }
  </code>
  ```

  效果展示：

  ![pre](/assets/img/pre.png)

> 空白折叠：源代码中的连续空白字符（空格、换行、制表符），在页面中会被折叠为一个空格

pre元素中不存在空白折叠规则，即页面会直接显示源代码中的文本

pre无视空白折叠的本质，CSS属性`white-space:pre`

### a

超链接

- href属性：
  1. 跳转地址（url）

     ```html
     <a href="https://baidu.com"></a>
     ```

  2. 跳转锚点（id）

     ```html
     <!-- 跳转到id为id的锚点 -->
     <a href="#id"></a>
     <!-- 回到顶部 -->
     <a href="#"></a>
     ```

  3. 功能链接(js,mailto,tel)

     ```html
     <a href="javascript:alert('你好')">弹出你好</a>
     <!-- 要求计算机上安装有邮件发送软件(exchange) -->
     <a href="mailto:szl027255330@gmail.com">发送邮件</a>
     <a href="tel:1008611">拨号</a>
     ```

- target属性:

  _self : 在当前页面窗口打开 , 默认值

  _blank : 新窗口打开

  `name`属性值

### HTML实体字符（HTML entity）

- 常见实体字符：

  | 实体字符 | 含义      |
  | -------- | --------- |
  | `&lt;`   | <         |
  | `&gt;`   | >         |
  | `&nbsp;` | 空格      |
  | `&amp;`  | &         |
  | `&copy;` | 版权符号© |
  | `&quot;` | "         |
  | `&apos;` | '         |

### 图片元素：img

- src属性：图片路径
- alt属性：当图片资源失效时，显示该文本

### 和map元素连用

定义图片映射中的区域，即点击不同区域跳转不同的链接

```html
<img usermap="#imgMap">
<map name="imgMap">
    <!-- shape(形状):圆形(圆心在图片左上角):circle，矩形:rect，多边形:poly -->
    <!-- coords(坐标) -->
    <!-- href(url) -->
    <!-- alt(文本) -->
    <!-- target(执行窗口) -->
    <img usemap="#avatar" src="./src//img//avatar.jpg" alt="avatar" title="avatar">
        <map name="avatar">
            <area title="嘴巴" shape="circle" coords="183,317,13" href="https://baike.baidu.com/item/%E5%98%B4%E5%B7%B4/10431464?fr=aladdin" alt="嘴巴" target="_blank">
        </map>
</map>
```

效果展示：

![img+map](/assets/img/img+map.png)

### 和figure元素连用

包裹img，该插图、标题和其中的内容通常作为一个独立的引用单元。即figure元素内部的都当成同一部份

```html
<!-- figure包裹的内容视为一个整体 -->
<figure>
    <!-- figcaption作为整个figure的标题 -->
        <figcaption>
            <h2>avatar</h2>
        </figcaption>
        <img usemap="#avatar" src="./src//img//avatar.jpg" alt="avatar" title="avatar">
        <map name="avatar">
            <area title="嘴巴" shape="circle" coords="183,317,13" href="https://baike.baidu.com/item/%E5%98%B4%E5%B7%B4/10431464?fr=aladdin" alt="嘴巴" target="_blank">
        </map>
    </figure>
```

效果展示

![map+figure](/assets/img/map+figure.png)

## 多媒体元素

### video

通常为mp4格式视频

- controls属性：播放控件（暂停，声音，快进，全屏等）；取值只能为controls
- autoplay属性：自动播放
- muted属性：静音播放
- loop属性：循环播放

```html
<video src="./demo.mp4" controls></video>
<!-- 如果有多个文件，可以选用source元素指定音视频 -->
<video>
 <source src="./demo1.mp4">
    <source src="./demo2.mp4">
</video>
```

### audio

通常为mp3格式音频

audio的属性同video

> 兼容性
>
> 1.旧版本的浏览器不支持
>
> 2.不同浏览器支持的音视频格式可能不一致
>
> ```html
> <video>
>  <source src="./demo.mp4">
>      <source src="./demo.avi">
>     <!-- 假如浏览器不支持avi格式的视频，则会显示下列文本 -->
>     <!-- 如果所有的资源都支持，则忽略下列文本 -->
>     <p>
>         对不起，您的浏览器版本过低，请下载最新版本的浏览器
>     </p>
> </video>
> ```
>

## 列表元素

## 有序列表：ol

- type属性：序号种类；type="1"：阿拉伯数字；type="i"：罗马数字；type="a"：字母

  > 这个属性在 HTML4 中弃用，但是在 HTML5 中被重新引入。除非列表中序号很重要（比如，在法律或者技术文件中条目通常被需要所引用），否则请使用 CSS [`list-style-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-type) 属性替代。

- reverse属性：倒序

```html
把大象装冰箱分几步？
<ol>
    <li>打开冰箱门</li>
    <li>装进大象</li>
    <li>关上冰箱门</li>
</ol>
```

效果展示：

![ol](/assets/img/ol.png)

## 无序列表：ul

无序列表常用于创建菜单或新闻列表

```html
今日食谱：
<ul>
    <li>东瓜</li>
    <li>西瓜</li>
    <li>南瓜</li>
</ul>
```

效果展示：

![ul](/assets/img/ul.png)

## 自定义列表：dl

通常用于定义术语，网页底部链接

dl：definition list

dt：definition title

dd：definition description

```html
术语解释
<dl>
    <dt>HTML</dt>
    <dd>超文本标记语言</dd>
    <dt>CSS</dt>
    <dd>层叠样式表</dd>
</dl>
```

效果展示：

![dl](/assets/img/dl.png)

## 表格元素

### 基础用法

table标签：定义表格

tr标签：定义一行

th标签：定义表头

td标签：定义内容

caption标签：设置标题

thead标签：定义表格头部

tbody标签：定义表格内容

- align属性：表格元素对齐方式
- border属性：表格边框
- cellpadding属性：文本到边框的距离
- cellspacing属性：单元格之间的距离
- width属性：规定表格的宽度

```html
<table align="center" border="1" cellpadding="10" cellspacing="0">
    <caption>list</caption>
        <tr>
            <th>name</th>
            <th>gender</th>
            <th>age</th>
        </tr>
        <tr>
            <td>Eric</td><td>man</td><td>20</td>
        </tr>
        <tr>
            <td>Alice</td>
            <td>woman</td>
            <td>19</td>
        </tr>
</table>
<!--上述表格等同于下列表格-->
<table align="center" border="1" cellpadding="10" cellspacing="0">
    <caption>list</caption>
    <thead>
        <tr>
            <th>name</th>
            <th>gender</th>
            <th>age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Eric</td><td>man</td><td>20</td>
        </tr>
        <tr><td>Alice</td><td>woman</td><td>19</td></tr>
    </tbody>
</table>
```

效果展示：

![table](/assets/img/table.png)

## 合并单元格

rowspan属性：跨行合并

colspan属性：跨列合并

```html
<table align="center" border="1" width="400" height="200">
        <tr>
            <td colspan="2"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
```

效果展示：

![colspan_table](/assets/img/colspan_table.png)

## 表单元素：form

form标签用于定义表单域，以实现用户信息的收集和传递

- action属性：提交的网址
- method属性：传输方式
- name属性：表单名称

### input

- type属性：规定input的类型
- name属性：定义input的名称
- value属性：定义input的值
- checked属性：默认被选中
- maxlength属性：规定输入字段的字符最大长度
- accept属性：规定可上传文件格式

```html
<input type="text" name="username"><br><br>
<input type="password" name="password"><br><br>
性别：
男：<input type="radio" name="sex" value="男">
女：<input name="sex" type="radio" value="女"><br><br>
爱好：
吃饭<input type="checkbox" name="hobby" checked>
睡觉<input name="hobby" type="checkbox" name="hobby">
打豆豆<input type="checkbox"><br><br>
上传文件：<input type="file" name="file"><br><br>
<input type="submit" value="确定"><br><br>
<input type="reset" value="重新填写">
```

效果展示：

![form](/assets/img/form)

### label

搭配input使用可以增强用户体验，点击label自动将焦点转到label对应的表单元素

- for属性：通过id绑定label与input等表单元素

```html
<label for="username">用户名</label>
<input type="text" name="username" id="username">
```

效果展示：

![label](/assets/img/label.png)

### select

下拉菜单

使用option定义选项

- selected属性：设置默认项

```html
地址：
    <select>
        <option>重庆</option>
        <option selected>北京</option>
        <option>上海</option>
    </select>
```

### textarea

当用户输入内容较多时，需要使用文本域textarea

```html
<textarea>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam fugiat blanditiis consectetur sequi nam quos recusandae provident aspernatur. Sunt pariatur molestiae excepturi unde reprehenderit esse cum corporis cumque repellat fugiat.
</textarea>
```

效果展示：

![textarea](/assets/img/textarea.png)

## 其他元素

HTML元素和它的属性种类繁多，常用的就是以上几种，如果有其他需要，查询相关文档：

- [W3C](https://www.w3school.com.cn/h.asp)
- [MDN](https://developer.mozilla.org/zh-CN/)
