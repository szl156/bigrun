# 常用小轮子

## 生日倒计时

借助moment实现

```js
    getBirthdayFun(){
       // 首先要获取到今年的生日
      let birthdayTime = moment().format('YYYY-') + '12-19'
      // 通过时间戳  去判断当前的时间戳是否大于今年生日的时间戳 
      if (moment().unix() >= moment(birthdayTime).unix()) {
        // 如果大于的话，那么就在今年的生日上再添加一年，已达到获取下次生日的时间
        birthdayTime = moment(birthdayTime).add(1, 'y').format('YYYY-MM-DD')
      }
      // 这个直接通过计算 （下次生日的时间戳 - 当前日期的时间戳) / (60 * 60 * 24) 最后求出来的就是 XX 天
      return parseInt(
        (moment(birthdayTime).unix() - moment().unix()) / (60 * 60 * 24)
      )
    }
```

## 回到顶部

也可以使用a标签的锚点链接

```js
    // 这里我把 vue3 的案例拿过来
    const bindTop = () => {
       // 方法一 这样可以实现，但是效果不太行
       window.scrollTo(0, 0)
       document.documentElement.scrollTop = 0;
        
      // 方法二 通过计时器去滚动 视觉上会丝滑一些，没有太大的卡顿效果
      const timeTop = setInterval(() => {
        // 去控制他的滑行距离
        document.documentElement.scrollTop = scrollTopH.value -= 50
        // 当滑到顶部的时候记得清除计时器(*) 重点
        if (scrollTopH.value <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
```

## 复制文本

```js
    const copyText = (text) => {
        // clipboardData 在页面上将需要的东西复制到剪贴板上
        const clipboardData = window.clipboardData
        if (clipboardData) {
          clipboardData.clearData()
          clipboardData.setData('Text', text)
          return true
        } else if (document.execCommand) {  // 注意 document.execCommand 已弃用 但是有些浏览器依旧支持 用的时候记得看兼容情况
          // 通过创建 dom 元素，去把要复制的内容拿到 
          const el = document.createElement('textarea')
          el.value = text
          el.setAttribute('readonly', '')
          el.style.position = 'absolute'
          el.style.left = '-9999px'
          document.body.appendChild(el)
          el.select()
          // 拷贝当前内容到剪贴板
          document.execCommand('copy')
          // 删除 el 节点
          document.body.removeChild(el)
          return true
        }
        return false
      }
      copyText('hello!') // ctrl + v = copyText  | true
```

## 防抖节流

- 防抖：指定时间内 频繁触发一个事件，以最后一次触发为准

  ```js
  // 防抖
      // fn 需要防抖的函数，delay 为定时器时间
      function debounce(fn,delay){
          let timer =  null  // 用于保存定时器
          return function () { 
              // 如果timer存在 就清除定时器，重新计时
              if(timer){
                  clearTimeout(timeout);
              }
              //设置定时器，规定时间后执行真实要执行的函数
              timeout = setTimeout(() => {
                 fn.apply(this);
              }, delay);
          }
      }
  ```

- 节流：指定时间内 频繁触发一个事件，只会触发一次

  ```js
  // 节流
      function throttle(fn) {
        let timer = null; // 首先设定一个变量，没有执行定时器时,默认为 null
        return function () {
          if (timer) return; // 当定时器没有执行的时候timer永远是false,后面无需执行
          timer = setTimeout(() => {
            fn.apply(this, arguments);
             // 最后在setTimeout执行完毕后再把标记设置为true(关键)
             // 表示可以执行下一次循环了。
            timer = null;
          }, 1000);
        };
      }
  ```

## 过滤特殊字符

```js
    function filterCharacter(str){
        // 首先设置一个模式
        let pattern = new RegExp("[`~!@#$^&*()=：”“'。，、？|{}':;'%,\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；]")
        let resultStr = "";
        for (let i = 0; i < str.length; i++) {
            // 主要通过 replace ，pattern 规则 去把字符替换成空 最后拼接在 resultStr
            resultStr = resultStr + str.substr(i, 1).replace(pattern, '');
        }
        // 当循环结束的时候返回最后结果 resultStr
        return resultStr;
    }
    
    // 示例
    filterCharacter('gyaskjdhy12316789#$%^&!@#1=123,./[') // 结果:gyaskjdhy123167891123
```

## 常用正则判断

```js
    // 校验2-9位文字 不符合为 false  符合为 true
    const validateName = (name) => {
      const reg = /^[\u4e00-\u9fa5]{2,9}$/;
      return reg.test(name);
    };

    // 校验手机号
    const validatePhoneNum = (mobile) => {
      const reg = /^1[3,4,5,6,7,8,9]\d{9}$/;
      return reg.test(mobile);
    };

    // 校验6到18位大小写字母数字下划线组成的密码
    const validatePassword = (password) => {
      const reg = /^[a-zA-Z0-9_]{6,18}$/;
      return reg.test(password);
    };
```

## 将 RGB 转换为十六进制

```js
function getColorFun(r,g,b) {
       return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
    
    getColorFun(178,232,55) // 这里输出的是 #b2e837
```

