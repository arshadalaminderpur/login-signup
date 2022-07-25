import { Component } from "react";

class Welcome extends Component{
    render(){
        return <h1>this is render components{this.props.first}</h1>
    }
}
export default Welcome;