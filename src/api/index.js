import * as echarts from 'echarts'
/**
 * 当前城市定位查询
 */
export function citySearch() {
    return new Promise((resolve, reject) => {
        //eslint-disable-next-line
        AMap.plugin('AMap.CitySearch', function () {
            //eslint-disable-next-line
            var citySearch = new AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    // console.log(result.city)
                    // const jwd = result.bounds.getCenter()
                    // console.log('经:',jwd.lat,'纬:',jwd.lng)
                    // resolve(result)
                    resolve(result.city)
                }
            })
        })
    })

}
/**
 * 当前定位经纬度查询
 */
export function jwdSearch() {
    return new Promise((resolve, reject) => {
        //eslint-disable-next-line
        AMap.plugin('AMap.CitySearch', function () {
            //eslint-disable-next-line
            var citySearch = new AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    // console.log(result.city)
                    const jwd = result.bounds.getCenter()
                    // console.log('经:',jwd.lat,'纬:',jwd.lng)
                    resolve([jwd.lat, jwd.lng])
                }
            })
        })
    })

}

/**
 * 实时天气查询
 * @param {string} city 要查询实时天气的城市
 */
export const liveWeather = (city) => {
    return new Promise((resolve, reject) => {
        //eslint-disable-next-line
        AMap.plugin('AMap.Weather', function () {
            //eslint-disable-next-line
            var weather = new AMap.Weather()
            weather.getLive(city, function (err, data) {
                if (!err) {
                    resolve(data)
                } else {
                    console.log(err)
                }
            })
        })
    })
}

/**
 * 未来三天天气预报查询
 * @param {string} city 要查询天气预报的城市
 */
export const forecastSearch = (city) => {
    return new Promise((resolve, reject) => {
        //eslint-disable-next-line
        AMap.plugin('AMap.Weather', function () {
            //eslint-disable-next-line
            var weather = new AMap.Weather();
            weather.getForecast(city, function (err, data) {
                if (!err) {
                    resolve(data.forecasts)
                } else {
                    console.log(err)
                }
            })
        })
    })
}
/**
 *  创建折线图
 * @param {array} arr 数据数组
 * @param {string} container 容器的id
 */
export const initChart = (arr,container) => {
    var myChart = echarts.init(container)
    // myChart.showLoading()
    var option = {
        title: {
            show: true,
            text: '天气变化趋势',
            x: 'center',
            textStyle: {
                color: 'white',
            },
            
        },
        xAxis: {
            show: false,
            type: 'category',
        },
        yAxis: {
            show: false,
            type: 'value'
        },
        series: [{
            
            data: arr,
            type: 'line',
            label: {
                show: true,
                formatter: "{c}℃"
            },
            symbol: 'triangle',
            symbolSize: 20,
            lineStyle: {
                color: '#fff',
                width: 4,
                type: 'dashed'
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: '#EE6666',
                color: 'yellow'
            }
        }]
    }
    myChart.setOption(option)
    return myChart
}



/**
 * 创建地图
 * @param {string} containerID
 */
export const createMap = (container) => {
    //eslint-disable-next-line
    var map = new AMap.Map(container, {
        center: [116.397428, 39.90923],
        zoom: 13
    })
    // 插件
    //eslint-disable-next-line
    AMap.plugin(['AMap.ToolBar', 'AMap.Geolocation'], function () {//异步加载插件
        //eslint-disable-next-line
        var toolbar = new AMap.ToolBar()
        map.addControl(toolbar)

        // //eslint-disable-next-line
        // var geolocation = new AMap.Geolocation({
        //     enableHighAccuracy: false,//是否使用高精度定位，默认:true
        //     timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        //     zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        // });
        // map.addControl(geolocation)
        // geolocation.getCurrentPosition()
        // //eslint-disable-next-line
        // AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
        // //eslint-disable-next-line
        // AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    })


}