import { Component } from "react";

class Person extends Component
{
    render(){
        return <>
        <h1>class Component {this.props.id}:{this.props.name}</h1>
        Book Component :<Book id="101" catag="introduction"/>: Book end
        </> 
    }
}
class Book extends Component{
    render(){
        return <h2>
            Book{this.props.id} is {this.props.catag}
        </h2>
    }
}
export default Person;