import React, {useState,useEffect} from 'react'

export default function Text(props) {

useEffect(() => {
        document.title = "TextUtils - Home"; 
      }, []);


    const[Text ,setText]= useState("")
const [font,otherfont]=useState('Big fontsize')
const [myfont, sizefont]=useState({
  fontSize:'16px'
})
   const bigfont=()=>{
     if(myfont.fontSize ==='16px'){
      sizefont({
        fontSize:'22px'

      })
       props.showAlert("Text is Big ","success")
      otherfont('Low fontSize')
    }
      else{
        sizefont({
          fontSize:'16px'
        })
         props.showAlert("Text is small ","success")
        otherfont('Big fontSize')
      }
     
   }
    const clickup=()=>{
        let newText=Text.toUpperCase();
        setText(newText)
         props.showAlert("Text convert to UpperCase ","success")
    }
    const clicklow=()=>{
        let newText=Text.toLowerCase();
        setText(newText)
        props.showAlert("Text convert to LowerCase ","success")

    }
  const clickCapital = () => {
  let newText = Text.split('. ').map(sentence => {
    if (sentence.length === 0) return sentence;
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }).join('. ');
  
  setText(newText);
};
const clickInverse = () => {
  let newText = Text.split('').map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
  props.showAlert("Text convert to Uppercase and LowerCase for same button ","success")
  setText(newText);
};

const downloadTextFile = (content, fileName = "textfile.txt") => {

  const blob = new Blob([content], { type: "text/plain" });

  
  const url = URL.createObjectURL(blob);

 
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
 const removeExtraSpaces = () => {
    const cleanedText = Text.replace(/\s+/g, ' ').trim();
    setText(cleanedText);
    props.showAlert("Remove the extra spaces in the text ","success")
  };
const clickdown = () => {
  if (!Text.trim()) {
   props.showAlert("Text file is not downloded ","danger")
    return;
  }
  props.showAlert("Text file is downloaded ","success")
  const fileName = prompt("Enter file name (without extension):", "modified_text") + ".txt";
  downloadTextFile(Text, fileName);

};
    const clickcopy = () => {
        navigator.clipboard.writeText(Text)
      .then(() => {
       props.showAlert("Text is copy ","success")
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
         props.showAlert("Text is not copy ","danger")
      });
  };
    const clickdel=()=>{
        let newText=Text.replace(Text,"")
        setText(newText)
        props.showAlert("Text is deleted ","success")
    }
       const handle=(events)=>{
            setText(events.target.value)
       }
     const wordCount = Text.trim() === "" ? 0 : Text.trim().split(/\s+/).length;
     let date= new Date();

  return (
  <>
  <div className="container" >

    <div className="text-area-container">
         <h1 >{props.heading}</h1>
      <textarea id="myTextarea" className="custom-textarea" value={Text} onChange={handle} placeholder="Type something here..." rows={8} style={myfont }/>
      <button disabled={Text.length===0} className="btn" onClick={clickup}>Convert To Uppercase</button>
      <button disabled={Text.length===0} className="btn" onClick={clicklow}>Convert To Lowercase</button>
     <button  disabled={Text.length===0} className="btn" onClick={removeExtraSpaces}>Remove extra space</button>
      <button disabled={Text.length===0} className="btn" onClick={clickcopy}>Copy now</button>
      <button disabled={Text.length===0} className="btn" onClick={clickCapital}>Capitalize</button>
       <button disabled={Text.length===0} className="btn" onClick={clickInverse}>Inverse</button>
        <button disabled={Text.length===0} className="btn" onClick={clickdown}>Download Now</button>
         <button disabled={Text.length===0} className="btn" onClick={bigfont}>{font}</button>
       <button disabled={Text.length===0} className="btn" onClick={clickdel}>Delete now</button>
        <div className="text-area-container" >
        <h2>Text summary</h2>
    <strong>Length :</strong>   <p >{wordCount} Word and {Text.length} Charcter</p>
     <strong> Read Time :</strong>  <p>{Text.trim() === "" ? 0 : 0.008 * Text.trim().split(/\s+/).length} Minutes read </p>
    <strong>Date :</strong>  <p >{date.getDate()+"-"+(date.getMonth() + 1)+"-"+date.getFullYear()}</p>
        <h2>Preview</h2>
        <p  id="text" style={myfont} > {Text}</p>   
    </div>
    </div>
    </div>
    </>
  )
}
