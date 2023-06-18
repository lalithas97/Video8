import React, {useState} from 'react'
//import PropTypes from 'prop-types'
export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowerClick=()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);// you are setting text to what user is entering
  }
  const[text,setText] = useState('');
  // console.log(useState('Enter text here'));


  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea><br/>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        </div>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}  minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

/*NOTES
1. //RESULTS of line 14-----------
  0 :"Enter text here"
    1: ƒ ()
    length:1
    name:"bound dispatchSetState"
    arguments: (...)
    caller:(...)
    [[Prototype]]:ƒ ()
    [[TargetFunction]]: ƒ dispatchSetState(fiber, queue, action)
    [[BoundThis]]: null
    [[BoundArgs]]: Array(2)
    length: 2
    [[Prototype]]: Array(0)
// ----------------------------
2. //Wrong way to change the state
//text = "New Text";
//Uncaught TypeError: Assignment to constant variable.

//Correct way to change the state
//setText("New Text");

3. If you want to change the text on change when the value is given as text, 
 setText(event.target.value);
 
4. We can return only one element so if you want more than one element then wrap it up in the jsx fragment <>...</>*/
