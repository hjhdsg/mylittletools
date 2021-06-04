// 导入需要的依赖成员，如果需要传递多个reducer，则需要合并reducer
import { createStore, applyMiddleware, compose } from "redux";
// applyMiddleware：申请使用中间件
import thunk from "redux-thunk";
// 导入redux-immutable提供的合并reducer的方法
import { combineReducers } from 'redux-immutable'

// 注意，api都是immutable中提供的，不要导入错了包
import { fromJS } from "immutable";
// 创建单一数据源
const defaultState = fromJS({
  // 当前城市
  currentcity: "",
  // 包括未来三天的天气预报数据
  chartdata: [],
  // 实时天气数据
  todaydata: {},
  // 当前城市经纬度
  jwd: [],
  // 城市搜索历史记录
  hs: [],
})

// 创建reducers
const currentCity = (state = defaultState, actions) => {
  if (actions.type === "changeCurrentCity") {
    // return {  ...state,currentcity: actions.payload }
    // console.log(state.toJS())
    let newdata = state.update("currentcity", () => actions.payload)
    // console.log(newdata.toJS())
    return newdata
  }
  return state
}
const chartData = (state = defaultState, actions) => {
  if (actions.type === "saveChartData") {
    // return {  ...state,chartdata: actions.payload }
    let newdata = state.update("chartdata", () => actions.payload)
    return newdata
  }
  return state
}

const todayData = (state = defaultState, actions) => {
  if (actions.type === "saveTodayData") {
    // return { ...state, todaydata: actions.payload }
    let newdata = state.update("todaydata", () => actions.payload)
    return newdata
  }
  return state
}

const jwdData = (state = defaultState, actions) => {
  if (actions.type === "saveJwd") {
    // return { ...state, jwd: actions.payload }
    let newdata = state.update("jwd", () => actions.payload)
    return newdata
  }
  return state
}

const hsData = (state = defaultState, actions) => {
  if (actions.type === "addHs") {
    // console.log(actions.payload)
    let arr = state.toJS().hs
    arr.push(actions.payload)
    // return { ...state, hs: [...arr] }
    let newdata = state.update("hs", () => [...arr])
    return newdata
  }
  return state
}

// 合并reducer
const reducers = combineReducers({ hsData, currentCity, chartData, todayData, jwdData })
// 调试工具的配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 4. 产生仓库
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// 5. 导出
export default store