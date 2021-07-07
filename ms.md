## p标签和a标签不能嵌套什么标签

    + p不能套块级标签
    + a不能套a
    + h不能套h


## css3新增了哪些东西

    1. 边框
    2. 背景
    3. 文字效果
    4. 2D转换
    5. 3D转换
    6. 动画
    7. 多列布局

## css哪些属性可以继承

    visibility、字体、文本、光标、list-style相关的属性

## ES6新增内容

    1. 变量和变量的作用域
    2. 模板字符串
    3. 解构赋值
    4. 扩展运算符
    5. 类和面向对象
    6. 箭头函数
    7. 模块化
    8. Symbol
    9. 函数参数默认值
    10. Set和Map
    11. 数组新增API
    12. 对象简写和新增API
    11. Promise
    12. Async
    13. Generator

## 如果现在让你封装一个ajax，你会封装些什么功能进去

2.支持 Promise API
4.提供了一些并发请求的接口（重要，方便了很多的操作）
6.拦截请求和响应
7.转换请求和响应数据
8.取消请求
9.自动转换JSON数据


## computed和watch区别

computed
1、computed是计算属性，也就是依赖某个值或者props通过计算得来得数据；
2、 computed的值是在getter执行之后进行缓存的，只有在它依赖的数据发生变化，会重新调用getter来计算；
3、 不支持异步，当computed内有异步操作时无效，无法监听数据的变化；

watch
1、watch是监听器，可以监听某一个数据，然后执行相应的操作；
2、不支持缓存，数据变直接会触发相应的操作；
3、监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
4、支持异步操作；

什么时候用computed 什么时候用watch 比较合适？

当多个属性影响一个属性的时候，建议用computed
当一个值发生变化之后，会引起一系列的操作，这种情况就适合用watch

## 异步操作有哪些

+ setTimeOut 、setInterval、setImmediate
+ Promise
+ 事件处理程序
+ 回调函数
+ async
+ ajax
+ fetch

Node.js 的异步

+ 添加以下
+ I/O
+ process.nextTick

## 箭头函数与普通函数的区别

1. 箭头函数是匿名函数，不能作为构造函数，不能使用new
2. this的指向不同
3. arguments对象
4. 箭头函数没有原型属性

## http和https的区别

+ 超文本传输协议HTTP协议被用于在Web浏览器和网站服务器之间传递信息，HTTP协议以明文方式发送内容，不提供任何方式的数据加 密，如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以直接读懂其中的信息，因此，HTTP协议不适合传输一些敏感信息，比如：信用卡号、密码等支付信息。
+ 安全套接字层超文本传输协议HTTPS，为了数据传输的安全，HTTPS在HTTP的基础上加入了SSL/TLS协议，SSL/TLS依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密。
+ 默认端口不同

优化

+ 减少 http 请求数量
+ 减少请求资源的大小
+ 图片优化（压缩/雪碧图。。。）
+ 懒加载、预加载
+ 使用外部js和css
+ 将js置底，css置顶
+ 使用内容发布网络（CDN）

## 防抖节流


## React setState 调用之后发生了什么？是同步还是异步？
+ 调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并,自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。保证按需更新。
+ setState 并不是单纯同步/异步的，它的表现会因调用场景的不同而不同。
  + 异步： 在 React 可以控制的地方，就为 true，比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略。
  + 同步： 在 React 无法控制的地方，比如原生事件，具体就是在 addEventListener 、setTimeout、setInterval 等事件中，就只能同步更新。

## Redux的state 是怎么注入到组件的，从 reducer 到组件经历了什么样的过程
+ 通过connect和mapStateToProps将state注入到组件中

## React组件的state和props有什么区别？
+ props 是传递给组件的（类似于函数的形参），而state 是在组件内被组件自己管理的（类似于在一个函数内声明的变量）。
+ props 是不可修改的，所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
+ state 是在组件中创建的，一般在 constructor中初始化 state。state 是多变的、可以修改，每次setState都异步更新的。

## 在React中组件的props改变时更新组件的有哪些方法？
static getDerivedStateFromProps

## React中怎么检验props？验证props的目的是什么？
PropTypes,如果项目汇中使用了TypeScript，那么就可以不用PropTypes来校验，而使用TypeScript定义接口来校验props。

## react生命周期
+ 挂载阶段
  + constructor
  + getDerivedStateFromProps
  + render
  + componentDidMount
+ 更新阶段
  + getDerivedStateFromProps
  + shouldComponentUpdate
  + render
  + getSnapshotBeforeUpdate
  + componentDidUpdate
+ 卸载阶段
  + componentWillUnmount
+ 错误阶段
  + componentDidCatch在后代组件抛出错误后被调用

## React 性能优化在哪个生命周期？它优化的原理是什么？
+ shouldComponentUpdate，当函数返回false时候，render()方法不执行，组件也就不会渲染，返回true时，组件照常重渲染。此方法就是拿当前props中值和下一次props中的值进行对比，数据相等时，返回false，反之返回true。

## React中发起网络请求应该在哪个生命周期中进行？为什么？
对于异步请求，最好放在componentDidMount中去操作，对于同步的状态改变，可以放在componentWillMount中，一般用的比较少。componentDidMount方法中的代码，是在组件已经完全挂载到网页上才会调用被执行，所以可以保证数据的加载。此外，在这方法中调用setState方法，会触发重新渲染。所以，官方设计这个方法就是用来加载外部数据用的，或处理其他的副作用代码。

## React-Router的实现原理是什么？
+ 客户端路由实现的思想：
~~~
基于 hash(HashRouter) ：通过监听hashchange事件，感知 hash 的变化
改变 hash 可以直接通过 location.hash=xxx

基于 history(BrowserRouter)：
改变 url 可以通过 history.pushState 和 resplaceState 等，会将URL压入堆栈，同时能够应用 history.go() 等 API
监听 url 的变化可以通过自定义事件触发实现
~~~
+ react-router 实现的思想：
~~~
基于 history 库来实现上述不同的客户端路由实现思想，并且能够保存历史记录等，磨平浏览器差异，上层无感知
通过维护的列表，在每次 URL 发生变化的回收，通过配置的 路由路径，匹配到对应的 Component，并且 render
~~~


## React-Router怎么设置重定向？
<Redirect>组件

## react-router 里的 Link 标签和 a 标签的区别
<Link> 的“跳转”行为只会触发相匹配的<Route>对应的页面内容更新，而**不会刷新整个页面**

## React-Router如何获取URL的参数和历史对象？
### 获取URL
+ get传值,使用this.props.location.search获取？后面的字符串，需要自行解析
+ 动态路由传值,使用this.props.match.params.id
+ 通过query或state传值，在Link组件的to属性中可以传递对象{pathname:'/admin',query:'111',state:'111'};。通过this.props.location.state或this.props.location.query来获取即可，传递的参数可以是对象、数组等，但是存在缺点就是只要刷新页面，参数就会丢失。
### 获取历史对象
+ 使用this.props.history获取历史对象
+ hooks的useHistory()


## Redux的理解和解决了什么问题
+ Redux 提供了一个叫 store 的统一仓储库，组件通过 dispatch 将 state 直接传入store，不用通过其他的组件。并且组件通过 subscribe 从 store获取到 state 的改变。使用了 Redux，所有的组件都可以从 store 中获取到所需的 state，他们也能从store 获取到 state 的改变。这比组件之间互相传递数据清晰明朗的多。
+ 主要解决的问题：
单纯的Redux只是一个状态机，是没有UI呈现的，react- redux作用是将Redux的状态机和React的UI呈现绑定在一起，当你dispatch action改变state的时候，会自动更新页面。

## redux工作流程
+ 首先，用户（通过View）发出Action，发出方式就用到了dispatch方法
+ 然后，Store自动调用Reducer，并且传入两个参数：当前State和收到的Action，Reducer会返回新的State
+ State—旦有变化，Store就会调用监听函数，来更新View

## Redux 中异步的请求怎么处理
当下主流的异步中间件有两种redux-thunk（容易上手）、redux-saga（学习成本高）。

## React Hooks 解决了哪些问题？
+ 在组件之间复用状态逻辑很难
+ 复杂组件变得难以理解

## useEffect 相当于类组件的哪几个生命周期
useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount
一个参数（函数）代表componentDidMount和componentDidUpdate，因为全都监控
第二个参数为[]只代表componentDidMount,因为监控为空，所以不会更新
第一个参数的返回值为函数代表componentWillUnmount

[]监测所有
不写，监测所有
[name]监测name的变化

## React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的
Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。

## v-if和v-for能不能同时使用
v-for比v-if优先级高，所以使用的话，每次v-for都会执行v-if,造成不必要的计算，影响性能，尤其是当之需要渲染很小一部分的时候。解决办法的话可以用computed计算属性。

## npm install 之后干了什么
+ npm install 会先查找本地已经下载过的包，不论版本是多少，找到了就不会去下载，所以如果要升级依赖，可以使用npm update或者显示安装npm install cross-env --save
+ npm install 会先下载项目中的依赖包，然后下载依赖的依赖，这样就会导致，生成的文件是树形结构，并且存在许多重复的包，所以这个时候npm就会将依赖扁平化，将依赖的依赖提取到第一层，遇到版本号不一致的也会保留，遇到完全一致的就会删除。
+ 最后还会提取依赖中的bin文件，windows操作系统生成cmd文件，linux系统生成软连接