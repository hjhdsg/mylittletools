/**
 * 项目路由文件
 */
import { lazy, Suspense } from "react";
import { Route, Redirect, Switch,withRouter } from "react-router-dom"
// 导入loading组件
import Loading from "@/components/loading";
// 动画插件
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "animate.css/animate.min.css"
import Search from "@/pages/search"
// 使用lazy导入需要的组件
const Home = lazy(() => import("@/pages/home"))
// const Search = lazy(() => import("@/pages/search"))
const M78 = lazy(() => import("@/pages/m78"))
const Map = lazy(() => import("@/pages/map"))
const Music = lazy(() => import("@/pages/music"))
// .....

// 编写路由规则
const Routes = (props) => {
    return (
        <Suspense fallback={<Loading />}>
            <TransitionGroup>
                <CSSTransition
                    timeout={1000}
                    classNames={{
                        enter: "animate__animated",
                        enterActive:
                            "animate__animated animate__fadeInDown",
                        exit: "animate__animated",
                        exitActive: "animate__animated animate__fadeOutUp",
                    }}
                    // 加key让CSSTransition知道自己的内容发生了变化，要求key值不重复
                    // 此处的key并不是为了提供效率，而是为了让框架强制重新渲染CSSTransition
                    key={props.location.pathname}
                >
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/search" component={Search}></Route>
                        <Route path="/m78" component={M78}></Route>
                        <Route path="/map" component={Map}></Route>
                        <Route path="/music" component={Music}></Route>
                        <Redirect from="/" to="/home" />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </Suspense>
    );
};

// 导出路由规则
export default withRouter(Routes)