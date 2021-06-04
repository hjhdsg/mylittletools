import { SearchBar, Toast, Cell } from 'zarm';
import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import actions from '@/store/actions'
import cityall from './city.js'
import styled from 'styled-components'
const { createAction } = actions
const Style = styled.div`
    .za-search-bar__cancel{
        cursor: pointer;
    }
    .za-cell:hover{
        background:#f2f2f2;
    }
`
class topsearch extends Component {
    state = {
        // 搜索框的value
        value: "",
        // 模糊查询收集的数据
        keyList: [],
        // 是否匹配开关
        iskey: 0
    }
    render() {
        let { value, keyList } = this.state
        return (
            <Style>
                <div>
                    <SearchBar
                        showCancel
                        placeholder="请输入城市名，快速查询天气信息"
                        cancelText="取消"
                        value={value}
                        onChange={this.setValue}
                        onClear={this.clear}
                        onCancel={this.cancel}
                        onSubmit={this.submitsearch}
                    />
                </div>

                <div className="keylist">
                    {
                        keyList.map((item, index) => {
                            return (

                                <Cell title={item} key={index} onClick={this.gohome.bind(this, item)} />


                            )
                        })
                    }
                </div>

            </Style>
        )
    }
    gohome = (city) => {
        this.props.changeCurrentCity(city)
        this.props.history.push({
            pathname: "/home",
            state: { city },
        })
    }
    setValue = (val) => {
        // console.log(val)
        let keyList = []
        // 是否为空
        if (val === '') {
            this.setState({ keyList: [] })
        } else {
            // 判断关键字是否存在数组中
            for (let i = 0; i < cityall.length; i++) {
                let city = cityall[i]
                // 存在一个就开始收集
                if (city.includes(val)) {
                    // console.log('you')
                    this.setState({ iskey: 1 })
                    // 遍历数组收集匹配项
                    cityall.forEach(element => {
                        if (element.includes(val)) {
                            keyList.push(element)
                        } else {
                            return
                        }
                    })
                    break
                } else {
                    // console.log('meiyou')
                    this.setState({ iskey: 0 })
                }
            }

            setTimeout(() => {
                if (this.state.iskey) {
                    this.setState({ keyList })
                } else {
                    this.setState({ keyList: ['没有匹配项'] })
                }
            }, 10)

        }

    }
    submitsearch = (val) => {
        // 判断输入是否正确
        if (cityall.includes(val)) {
            this.props.changeCurrentCity(val)
            this.props.history.push({
                pathname: "/home",
                state: { city: val },
            })
            // 加入历史记录。。。
            this.props.addHs(val)
        } else {
            // 轻提示
            Toast.show('请输入城市名称')
            return false
        }

    }
    // 清空按钮
    clear = () => {
        this.setState({ value: "" })
    }
    // 取消按钮回到/home
    cancel = () => {
        this.props.history.push("/home")
    }

}


// 将redux中的state数据源映射到本组件自身的props中
function mapStateToProps(state) {
    // console.log(state)
    state = state.toJS()
    return {
        currentcity: state.currentCity.currentcity,
        hs: state.hsData.hs
    }
}
// 将dispatch映射成自身组件的props
function mapDispatchToProps(dispatch) {
    // 该方法返回一个对象，对象中都是方法
    return {
        changeCurrentCity(city) {
            dispatch(createAction("changeCurrentCity", city))
        },
        addHs(city) {
            dispatch(createAction("addHs", city))
        }

    }
}

// 第三步：应用HOC
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(topsearch))
