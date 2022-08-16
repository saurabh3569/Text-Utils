import React, { useState } from 'react'

const TextForm = () => {

    const[Text,setText] = useState('')


    const handleUpClick = () => {
        const newText = Text.toUpperCase()
        setText(newText);
    }

    const handleDownClick = () => {
        const newText = Text.toLowerCase()
        setText(newText);
    }

    const handleClearText = () =>{
      setText(" ");
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    let preview = {
      color:"green"
    }

  return (
    <>
        <h1>Enter your text here</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" value={Text} onChange={handleOnChange} rows="9"></textarea>
</div>
<button className='btn btn-dark mx-1' onClick={handleUpClick}>convert to uppercase</button>
<button className='btn btn-dark mx-1' onClick={handleDownClick}>convert to lowercase</button>
<button className='btn btn-dark mx-1' onClick={handleClearText}>clear text</button>
<div className="container my-2">
    <h2>Your Text Summary</h2>
    <p>total word : {Text.split(" ").length-1}</p>
    <p>total character : {Text.length}</p>
    <p>{(0.008 * Text.split(" ").length)-0.008} minuts to read</p>
    </div>
    <h2>{Text.length>0?"preview":" "}</h2>
    <p style={preview}>{Text}</p>
    </>
  )
}

export default TextForm

 