
import React, { Component } from "react";
import { Loading} from 'zarm';



export default class index extends Component {
    componentDidMount() {
        Loading.show();
        setTimeout(() => {
            Loading.hide();
        }, 3000)
    }

    render() {
        return (
            <>
            </>
        );
    }
}







