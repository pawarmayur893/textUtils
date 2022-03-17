import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const convertToUC = ()=>{
        console.log("UC Clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const convertToLC = ()=>{
        console.log("LC Clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const convertToTC = ()=>{
        console.log("TC Clicked");
        let newText = text.split(' ');
        let caps=[];
        newText.forEach(e=>{
            caps.push(e[0].toUpperCase()+e.slice(1,e.length));
        })
        setText(caps.join(' '));
    }
    const copyText=()=>{
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const clearText=()=>{
        let newText ="";
        setText(newText);
    }


    const onChangeText = (event)=>{
        console.log("onchange");
        setText(event.target.value)
    }
    const [text,setText]=useState("");
    
    return (
        <div>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>

                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'dark'}} onChange={onChangeText} value={text} id="exampleFormControlTextarea1" rows="4" cols="5"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={convertToUC}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={convertToLC}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={convertToTC}>Convert to TitleCase</button>
                <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>

            </div>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h1>Text Summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} charactors.</p>
            </div>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h2>Preview</h2>
                {text.length>0?text:'Please Enter some text in tet area to preview'}
            </div>
        </div>
    )
}

