// 项目入口文件（编译入口）
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// 导入provider
import { Provider } from "react-redux";
import store from "@/store";
import "normalize.css/normalize.css"

import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
ReactDOM.render(
    <ConfigProvider locale={zhCN} primaryColor="#007fff">
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </ConfigProvider>,
    document.getElementById("root")
);