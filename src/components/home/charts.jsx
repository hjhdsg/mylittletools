import React, { Component ,createRef} from 'react'
import {  initChart } from "@/api"
class charts extends Component {
    ref_chart = createRef()
    // 定义变量存储折线图实例，方便销毁
    ischart = ''
    render() {
        // console.log(this.props.chartdata)
        return (
            <div id="chart" ref={this.ref_chart} style={{ width: '100vw', height: '200px' }}></div>
        )
    }

    componentDidMount() {
        // console.log(this.ref_chart.current)
        // 定时器预防收到空数据的时候
        
        setTimeout(() => {
           this.ischart =  initChart(this.props.chartdata, this.ref_chart.current)
           
        }, 1000)
    }

    componentWillUnmount() {
        // 销毁折线图实例
        this.ischart.dispose()
    }
    

}


export default charts
