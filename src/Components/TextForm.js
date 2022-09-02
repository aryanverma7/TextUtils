import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const clearClick = ()=>{
        // console.log("Clear Text was clicked"+text);
        setText("");
        props.showAlert("Cleared Text","success");
    }
    const rmClick = ()=>{
        // console.log("Remove Space was clicked"+text);
        let newTxt=text.split(/[ ]+/);
        setText(newTxt.join(" "));
        props.showAlert("Removed Extra Space","success");
    }
    const copyClick = ()=>{
        // console.log("Copy Text was clicked"+text);
        let text=document.getElementById("mybox");
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text","success");
    }
    const handleOnchange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText]=useState("");
    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnchange} style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'grey'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={clearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={copyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={rmClick}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
        </div>
        </>
    );
}
