import React, { useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Convert to upper case was clicked")
        let nexText = text.toUpperCase();
        setText(nexText)
    }
    const handleLowClick = ()=>{
        let nexText = text.toLowerCase();
        setText(nexText)
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    
    return (
        <>
        <div>
            <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value = {text} id="myBox" rows="8"/>
                </div>
            <button type="submit" onClick = {handleUpClick} className="btn btn-primary mx-2">Convert to Uppercase</button>
            <button type="submit" onClick = {handleLowClick} className="btn btn-primary mx-2">Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text Summary</h1>
            <p>Given text contains {text.split(" ").length} characters and {text.length} words.</p>
        </div>
        </>
  )
}
