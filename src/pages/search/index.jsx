import React from 'react'
import styled from "styled-components"

import Topsearch from "@/components/search/topsearch"
import HotCity from "@/components/search/hotCity"
import History from "@/components/search/history"
const Style = styled.div`
    position:resize;
    .topsearch{
        width:100vw;
        position:absolute;
        z-index:100;
    }
    .bottom{
        position:absolute;
        padding-top:44px;
        z-index:99;
    }
`

const Search = () => {
    return (
        <Style>
            {/* 顶部搜索框 */}
            <div className="topsearch">
                <Topsearch></Topsearch>
            </div>
            <div className="bottom">
                {/* 热门城市 */}
                <HotCity></HotCity>
                {/* 历史纪录 */}
                <History></History>
            </div>


        </Style>
    )
}


export default Search