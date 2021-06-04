import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import MyIcon from '@/components/icon'
import styled from "styled-components"

// 样式
const TopSelect = styled.div`
   color:#fff;
   font-size:20px;
   font-weight:700;
   text-align:center;
   padding-top:50px;
   padding-bottom:30px;
   position: relative;
   .map{
       position: absolute;
       top:10px;
       right:10px;
       .za-icon{
           margin-left:5px;
       }
   }
   .za-icon,span{
       cursor: pointer;
   }

   
`

class topSelect extends Component {
    render() {
        // console.log(this.props.children)
        return (
            <TopSelect>
                <p className="map" >
                    <MyIcon type="icon-yinfu" onClick={this.gomusic} />
                    <MyIcon type="icon-ditu" onClick={this.gomap} />
                </p>
                <p>
                    <span onClick={this.gosearch}>{this.props.children}<MyIcon type="icon-xia" /></span>
                </p>
            </TopSelect>
        )
    }

    // 点击跳转搜索页面
    gosearch = () => {
        this.props.history.push("/search")
    }

    gomap = () => {
        this.props.history.push("/map")
    }
    gomusic = () => {
        this.props.history.push("/music")
    }
}






// 第三步：应用HOC
export default withRouter(topSelect)
