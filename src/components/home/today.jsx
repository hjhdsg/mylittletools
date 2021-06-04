import React, { Component } from 'react'
import styled from "styled-components"

// ============样式==========
const Today = styled.div`
   text-align:center;
   color:#fff;
   
   h2{
       font-size:70px;
       margin-bottom:30px;
   }
   p{
       margin-bottom:20px;
   }
`
// ============================

class today extends Component {
    render() {
        // console.log(this.props.todaydata)
        const { temperature,reportTime, weather, windPower, windDirection,humidity } = this.props.todaydata
        return (
            <Today>
                <h2>{temperature}℃</h2>
                <p>{weather} | 更新时间:{reportTime}</p>
                <p>风力:{windPower}| 风向:{windDirection} | 空气湿度:{humidity}</p>
            </Today>
        )
    }

}

export default today