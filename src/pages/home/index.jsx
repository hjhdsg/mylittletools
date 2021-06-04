import React, { Component } from 'react'
import { connect } from "react-redux"
import actions from '@/store/actions'
import styled from "styled-components"

// 导入组件
import TopSelect from "@/components/home/topSelect"
import Today from "@/components/home/today"
import ThreeDay from "@/components/home/threeday"
import Charts from "@/components/home/charts"


// 导入接口api
import { citySearch, liveWeather, forecastSearch, jwdSearch } from "@/api"

// 样式
const Home1 = styled.div`
    background: no-repeat center;
    /* background-image:url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F9534638962%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625310482&t=6d840640b9dd3335409e9ff2733a42fb'); */
    /* background-image:url('https://img-blog.csdnimg.cn/20210516133843421.gif'); */
    background-size:cover;
    height:100vh;
`
const { createAction } = actions
const imgList = [
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F41f541c18702a62f8a21c0199025562ceda892cd10eaed-xEwW58_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625329373&t=ca69ebfea0e13d265c567b0cd7218fdf',
    'https://img-blog.csdnimg.cn/20210516133843421.gif',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190409%2Ff00c33b200d84bdba678e3000671043c.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625329446&t=92c6e0fb76608bff228ec12a36da64b9',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F9534638962%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625310482&t=6d840640b9dd3335409e9ff2733a42fb',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c8f2593224fba8012193a347f0a6.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625383946&t=d15b95840b87c0f8a1d759e9e239820c',]
class Home extends Component  {
    state = {
        // 背景图片路径
        bgimg: ""
    }
    render() {
        // console.log("切换为",this.props.location.state)
        const { currentcity, todaydata, chartdata, forecast } = this.props
        const url = this.state.bgimg ? this.state.bgimg : "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180314%2F0de196c858eb47e5b0780a89ef7b5362.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625359723&t=9f3e40afc392a7bde9672d4dda83e148"
        const img = {
            backgroundImage: `url('${url}')`
        }
        // console.log(img)
        return (
            <Home1 style={img}>
                {/* 顶部城市选择按钮 */}
                <TopSelect>{currentcity ? currentcity : ''}</TopSelect>
                {/* 当天天气预报显示区域 */}
                <Today todaydata={todaydata ? todaydata : {}}></Today>
                {/* 未来三天天气预报显示区域 */}
                <ThreeDay forecast={forecast ? forecast : []}></ThreeDay>
                {/* 天气变化趋势图 */}
                <Charts chartdata={chartdata ? chartdata : []}></Charts>
            </Home1>
        )
    }
    
    
    // 在父组件调用接口将返回数据分发到子组件
    componentDidMount() {
        const _self = this
        // 查询当前定位函数
        async function getcity() {
            // const result =await citySearch()
            const currentCity = await citySearch()
            // console.log(result)
            // const currentCity = result.city
            // 将数据存储到store
            _self.props.changeCurrentCity(currentCity)
            // 查询当前城市实时天气
            getliveweather(currentCity)
            // 天气预报查询
            getforecast(currentCity)
            // 经纬度查询
            getjwd()
        }

        // 查询当前城市实时天气函数
        async function getliveweather(city) {
            const todayData = await liveWeather(city)
            // console.log(todayData.weather)
            // 将数据存储到store
            _self.props.saveTodayData(todayData)
            // 设置背景图片
            let bgimg = ''
            switch (todayData.weather) {
                case "多云":
                    bgimg = imgList[3]
                    break
                case "雷阵雨":
                    bgimg = imgList[2]
                    break
                case "小雨":
                    bgimg = imgList[1]
                    break
                case "中雨":
                    bgimg = imgList[1]
                    break
                case "大雨":
                    bgimg = imgList[1]
                    break
                case "阴":
                    bgimg = imgList[4]
                    break
                case "晴":
                    bgimg = imgList[0]
                    break
                default:
                    bgimg = ''
            }
            _self.setState({ bgimg })


        }

        // 天气预报查询函数
        async function getforecast(city) {
            const forecast = await forecastSearch(city)
            _self.props.saveChartData(forecast)
        }

        // 经纬度查询函数
        async function getjwd() {
            const jwd = await jwdSearch()
            _self.props.saveJwd(jwd)
        }




        // 如果没有当前城市才执行定位查询
        if (this.props.location.state) {
            console.log("切换")
            // 解决切换后再次刷新会没有当前城市的bug
            this.props.changeCurrentCity(this.props.location.state.city)
            // 查询当前城市实时天气
            getliveweather(this.props.location.state.city)
            // 天气预报查询
            getforecast(this.props.location.state.city)
            // 经纬度查询
            getjwd()
        } else {
            console.log('首次')
            getcity()
        }



    }
}


// 将redux中的state数据源映射到本组件自身的props中
function mapStateToProps(state) {
    // return state
    // console.log(state.toJS())
    state = state.toJS()
    const currentcity = state.currentCity.currentcity
    const todaydata = state.todayData.todaydata
    let arr = []
    state.chartData.chartdata.forEach(item => {
        arr.push(item.dayTemp)
        // console.log(arr)
    })
    // console.log(arr)
    const forecast = state.chartData.chartdata.slice(1)
    const jwd = state.jwdData.jwd
    const hs = state.hsData.hs
    return {
        currentcity,
        todaydata,
        chartdata: arr,
        forecast,
        jwd,
        hs


    }
}
// 将dispatch映射成自身组件的props
function mapDispatchToProps(dispatch) {
    // 该方法返回一个对象，对象中都是方法
    return {
        changeCurrentCity(city) {
            dispatch(createAction("changeCurrentCity", city))
        },
        saveTodayData(city) {
            dispatch(createAction("saveTodayData", city))
        },
        saveChartData(arr) {
            dispatch(createAction("saveChartData", arr))
        },
        saveJwd(jwd) {
            dispatch(createAction("saveJwd", jwd))
        }

    }
}

// 第三步：应用HOC
export default connect(mapStateToProps, mapDispatchToProps)(Home)