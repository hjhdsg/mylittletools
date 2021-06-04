import React, { Component } from 'react'
import OneDay from "./oneday"
// import { forecastSearch, citySearch} from "@/api"
import styled from "styled-components"

// 样式
const Three = styled.div`
display:flex;
justify-content:space-around;
padding:10px 0px;
margin:0px 10px;
margin-bottom:20px;
border-top:1px solid #f2f2f2;
border-bottom:1px solid #f2f2f2;
  div{
      width:100px;
      height:110px;
      box-sizing:border-box;
  }

`
class threeday extends Component {
    render() {
        const threedata = this.props.forecast
        // console.log(threedata)
        return (
            <Three>
                {
                    threedata.map(item => {
                        const icon = this.select(item.dayWeather)
                        return (
                            <div key={item.week}>
                                <OneDay data={item} icon={icon} />
                            </div>)
                    })
                }
            </Three>
        )
    }
    
    // 根据天气返回图标函数
    select = (weather) => {
        let icon = ''
        switch (weather) {
            case "多云":
                icon = "icon-duoyun"
                break
            case "雷阵雨":
                icon = "icon-leizhenyu"
                break
            case "阵雨":
                icon = "icon-zhenyu"
                break
            case "大雨-暴雨":
                icon = "icon-baoyu"
                break
            case "暴雨":
                icon = "icon-baoyu"
                break
            case "晴":
                icon = "icon-qingtian"
                break
            case "小雨":
                icon = "icon-xiaoyu"
                break
            case "中雨":
                icon = "icon-zhongyu"
                break
            case "大雨":
                icon = "icon-weibiaoti--"
                break
            default:
                icon = "icon-duoyun"
        }
        return icon
    }

}

export default threeday








