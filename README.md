
## 1 删除不需要的文件

## 2 确定整体目录结构

## 3 安装需要使用的第三方包
npm i  axios react-router-dom react-redux redux-thunk react-transition-group redux styled-components react-app-rewired customize-cra echarts zarm react-soundplayer redux-immutable immutable

## 4 编写路由文件 /src/router/index.js

## 5 自定义图标组件

+ 对zarm的Icon组件进行二次封装，使用在线iconfont图表

## 6 接口

+ 实时天气查询
+ 未来三天天气预报查询
+ 定位查询
+ 地图

## 7 功能

+ Canvas标签与AudioContext对象可以轻松实现可视化频谱效果

+ react-transition-group
    + 动画

+ 首页
    + 打开网页根据ip进行城市级定位
    + 根据定位到的城市实时查询该城市天气信息并展示
    + 根据定位查询未来三天的天气预报
    + echarts数据可视化
    + 背景图片随天气改变
    + 路由动画
    + 地图按钮

+ 切换城市界面
    + 选择城市后修改store里的当前城市,并跳转回首页，首页就使用修改后的城市进行天气查询
    + 搜索框关键字查询
    + 热门城市
    + 历史记录（搜索之后将记录保存到store）


## 问题

+ 异步请求回来的数据给到子组件,子组件没来得及更新
    + 加了个定时器

+ echarts  `There is a chart instance already initialized on the dom.`

```js
componentWillUnmount() {
        // 销毁折线图实例
        this.ischart.dispose()
}

```

+ 路由跳转重复render
    + 执行render的情况
      1. 首次加载
      2. setState改变组件内部state。 
            注意： 此处是说通过setState方法改变。
      3. 接受到新的props
    + immutable
        + store入口修改合并reducer方法
        + 修改数据源fromJS()
        + 组件中转回toJS()
        + reducer使用immutable的api实现修改数据

