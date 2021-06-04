import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Message, Button } from 'zarm';
import styled from "styled-components"
import actions from '@/store/actions'
const { createAction } = actions

// 样式
const CityList = styled.div`
   display:flex;
   flex-wrap:wrap;
   justify-content:flex-start;
   width:100vw;
   padding:10px;
   padding-left:20px;
   padding-top:0;
   
  
   button{
       margin-right:10px;
       background-color:#f2f2f2;
       margin-top:10px;
       width:30%;
   }
   
`
class HistoryCity extends Component {
   
    render() {
        const cityLists = this.props.hs.length ? this.props.hs : ['北京市']
        return (
            <>
                <Message size="lg">历史记录</Message>
                <CityList>
                    {
                        cityLists.map((item) => {
                            return (
                                <Button size="xs" key={item} onClick={this.gohome.bind(this, item)}>{item}</Button>
                            )
                        })
                    }


                </CityList>
            </>
        );
    }
    gohome = (city) => {
        this.props.changeCurrentCity(city)
        this.props.history.push({
            pathname: "/home",
            state: { city },
        })
    }
    
}

// 将redux中的state数据源映射到本组件自身的props中
function mapStateToProps(state) {
    return {
        hs: state.toJS().hsData.hs,
        currentcity: state.toJS().currentCity.currentcity
    }
}
// 将dispatch映射成自身组件的props
function mapDispatchToProps(dispatch) {
    // 该方法返回一个对象，对象中都是方法
    return {
        changeCurrentCity(city) {
            dispatch(createAction("changeCurrentCity", city))
        },

    }
}

// 第三步：应用HOC
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HistoryCity))

