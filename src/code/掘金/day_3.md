# Promise/async await

## Promise对象

创建Promise对象：new Promise((resolve,reject)=>{executor})

- 创建对象时，传入的回调函数称为`executor`（立即执行）
- 请求成功时，调用resolve函数；失败时调用reject函数
- 异常处理：
  - .then方法可以传入两个回调函数：
    - fulfilled函数，已完成
    - rejected函数，已拒绝
- 如果状态从待定变为其他状态，则无法更改

### resolve不同值的区别

1. 传入一个普通值或对象：则该值作为then回调函数的参数
2. 如果resolve传入另一个Promise对象，则新Promise决定原Promise对象的状态
3. 传入一个带有then方法的对象，则执行该then方法

## Promise对象的方法

### then方法的参数

1. 成功回调
2. 失败回调
3. null或""作为占位符，捕获异常

### finally方法

在Promise对象最后，无论状态是fulfilled还是rejected都执行一次finally方法

### all方法

参数为promise组成的可迭代对象，只有当这个对象都为resolve状态时才调用then方法

只要有一个是rejected状态，则调用catch方法

### allSettled方法

用法同上all方法，不同之处在于，无论对象中的状态是什么样，均会返回结果

### race方法

获取第一个返回结果的promise，无论是什么状态

### any方法

获取第一个为fulfilled状态的promise，若全为rejected状态，则报错

## async/await

async可以申明一个异步函数

async可以通过catch方法捕获异常

异步函数中可以使用await，普通函数不行

await会等待Promise变成fulfilled状态时执行，相当于包括在then函数中，如果状态变成rejected，则需要在函数内部进行try，catch，或者进行链式调用，进行.catch操作