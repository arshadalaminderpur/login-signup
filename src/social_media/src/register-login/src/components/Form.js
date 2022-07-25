import React,{useState} from 'react'

function Form(props) {
    const [text,setText]=useState("text area")

    const handleUpper=()=> {
        console.log("button clicked")
        // setText("text area2")
        let text1=text.toUpperCase()
        setText(text1)
    }
    const handleOnChange=(event)=> {
        
        setText(event.target.value)
        console.log(event.target.value)
        console.log(text)


    }
    const handleLower=()=> {
        let text1=text.toLocaleLowerCase()
        setText(text1)
    }
    
  return (
    <>
    <div >
        
        <h1>{props.heading}</h1>
        <textarea id="my-text" rows={8} cols="100" value={text} onChange={handleOnChange}></textarea><br/>
        <button onClick={handleUpper} >Upper</button>
        <button onClick={handleLower} >Lower</button>
      
    </div>

    <div>
        <h2>Text summary</h2>
        <h3>{text.split(" ").length} Words and {text.length} Characters</h3>
        <p>it will take {text.split(" ").length*0.008} minutes to read</p>
        <p>{text}</p>
    </div>
    </>
  )
}
export default Form;
