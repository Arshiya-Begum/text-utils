import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convereted to Upper Case.", "success")
    }
    const handleLowClick = () => {
        let newlowText = text.toLowerCase();
        setText(newlowText);
        props.showAlert("Convereted to Lower Case.", "success")
    }
    const handleInverseCaseClick = () => {
        let newInverseText = text.split("").map((char) => {return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase() }).join("");
        setText(newInverseText);
        props.showAlert("Convereted to Inverse Case.", "success")
    }
    const handleAlternateCaseClick = () => {
        let newAlternateText = "";
        for (let i =0; i<text.length; i++)
        {
            if (i%2 === 0)
            {
                newAlternateText += text[i].toUpperCase();
            }
            else
            {
                newAlternateText += text[i].toLowerCase();
            }
        }
        setText(newAlternateText);
        props.showAlert("Convereted to Alternate Case.", "success")
    }
    const handleCapitalCaseClick = () => {
        let newCapitalText = text.split(" ").map(eachWord => {return eachWord.substring(0,1).toUpperCase()+eachWord.substring(1).toLowerCase() }).join(" ");
        setText(newCapitalText);
        props.showAlert("Convereted to Capital Case.", "success")
    }
    const handleClearText = () => {
        setText("");
        props.showAlert("Text Box is cleared.", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black"}}>
                <div className ="mb-3">
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black"}}></textarea>
                    </div>
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleCapitalCaseClick}>Capital Case</button>
                    <button className="btn btn-primary mx-1" onClick={handleAlternateCaseClick}>Alternating case</button>
                    <button className="btn btn-primary mx-1" onClick={handleInverseCaseClick}>Inverse case</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                </div>    
            </div>
            <div className="container my-3" style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black"}}>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something in textbox to preview it here!"}</p>
            </div>
        </>
  )
}
