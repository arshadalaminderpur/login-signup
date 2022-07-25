function Head(props){
    const number=[1,2,3,3]
    const mystyle={
        color:"red",
    
        background:"green",
        height:"200px",
        width:"300px"

    }
    const listitem=number.map((number)=> <li style={mystyle}>{number}</li>)
    
    return (
        <p>
            this is head comp.
            <ul>{listitem}</ul>
            
        </p>
    );
}
export default Head;