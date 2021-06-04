import React, { Component } from 'react';
// 导入自定义图标
import MyIcon from "@/components/icon"
// 导入styled
import styled from "styled-components"

const One = styled.div`
    text-align:center;
    color:#fff;
    
    dl{
        overflow:hidden;
        margin-top:10px;
        margin-bottom:10px;
        dt{
            float:left;
            svg{
                width:48px;
                height:48px;
            }
        }
        dd{
            float:left;
            span{
                display:block;
                margin-top:6px;
            }
        }
        
    }

`


class oneday extends Component {
    render() {
        const {data, icon} = this.props
        return (
            <One>
                <ul>
                    <li>{data.date}</li>
                    <li>
                        <dl>
                            <dt><MyIcon type={icon} /></dt>
                            <dd>
                                <span>最高{data.dayTemp}</span>
                                <span>最低{data.nightTemp}</span>
                            </dd>
                        </dl>
                    </li>
                    <li>{data.dayWeather}</li>
                </ul>
            </One>
        )
    }
    
}

export default oneday;
