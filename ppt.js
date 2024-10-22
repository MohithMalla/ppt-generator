import React, { useState,useRef } from "react";
import {classes} from './items.js';
import './App.css'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PptxGenJS from "pptxgenjs";
import Intro from './demo.js'
import Inputpae from './Inputpage.js';


export default  function Temp(cl,id) {
    const [file, setFile] = useState(false);
    const [Bola,setBola]=useState(true);
    function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const i=localStorage.getItem('digit')
  const [data,setData]=useState([]);
  const inpt=useRef(0);
  const inpt2=useRef(0)
  {console.log(cl)}
     function handleInput(){
 
       setData(prev=>[inpt.current.value,inpt2.current.value])
 
     }
     function handleWrong(){
           setBola(false);
     }
     let k=localStorage.getItem('digit');
    
   return(
     <div className="cl" id={id}>
{Bola&& <div className="wrongclass"> <button className="wrong" onClick={handleWrong} style={{backgroundColor:"red"}}>X </button><Intro/> </div> }
<div className="page1">
           <div className="input"  >
               <h4>Title</h4>
               <input ref={inpt} ></input>
               <h4>Subtitle</h4>
               <textarea ref={inpt2}></textarea>
               <h2>Add Image:</h2>
         <input type="file" onChange={handleChange} />
         
             <button onClick={handleInput}>SAVE</button>
         
           </div>
           <div className= {`${classes[i]} clssd`}>
               <h1 className="class_head">{data[0]}</h1>
               <p>{data[1]}</p>
               {file && <img id="imag" src={file} alt="Uploaded" />}
           </div>
         
       </div>
       <Inputpae j={k}/>
       </div>
    
   );
}

    



function Temp1({ cl, id }) {
    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const i = localStorage.getItem('digit');
    const [data, setData] = useState([]);
    const inpt = useRef(0);
    const inpt2 = useRef(0);
    {console.log(cl)}

    function handleInput() {
        setData([inpt.current.value, inpt2.current.value]);
    }
    return (
        <div className={cl} id={id}>
            <div className="pages">
                <div id="input">
                    <h4>Title</h4>
                    <input ref={inpt}></input>
                    <h4>Subtitle</h4>
                    <textarea ref={inpt2}></textarea>
                    <h2>Add Image:</h2>
                    <input type="file" onChange={handleChange} />
                    <button id="savebtn" onClick={handleInput}> SAVE</button>
                </div>
                <div id="abc" className={`${classes[i]} clssd`}>
                    <div className="matter">
                        <span><h1 id="head" align="center">{data[0]}</h1></span>
                        <p id="para">{data[1]}</p>
                    </div>
                    <div>
                        {file && <img id="imag" src={file} alt="Uploaded" />}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Unimage({cl,id}){
    const i=localStorage.getItem('digit')
    const [data,setData]=useState([]);
    const inpt=useRef(0);
    const inpt2=useRef(0)
     {console.log(cl)}
       function handleInput(){
   
         setData(prev=>[inpt.current.value,inpt2.current.value])
   
       }
  return (  <div className={cl} id={id}>
        
    <div className="page1">
      <div id="input"  >
          <h4>Title</h4>
          <input ref={inpt} ></input>
          <h4>Subtitle</h4>
          <textarea ref={inpt2}></textarea>
        <button id="savebt" onClick={handleInput}>SAVE</button>
      </div>
      <div  id="abc"className= {`${classes[i-1]} clssd`}>
        <div className="matter">
          <h1 id="headnopic" >{data[0]}</h1>
          <p id="paranopic">{data[1]}</p>
        </div>
      </div>
     
  </div>

  </div>
);
  }


 function Inputpage() {
    const [cls, setCls] = useState(0);
    const [add, setAdd] = useState([]);
    
    function handleAdd() {
        setCls(cls + 1);
        setAdd(prev => [...prev, <Temp1 cl={ `${cls}`} id={`${cls}`} />]);
    }
    function handleunimg(){
        setCls(cls+1)
        setAdd(prev=>[...prev,<Unimage cl={ `${cls}`} id={`${cls}`} />])
      }
    

      function Download(){
        const pptx = new PptxGenJS();
        const elements = document.querySelectorAll('.clssd');
        let promises = [];
        
        elements.forEach(tmplts => {
            const slide = pptx.addSlide();
            promises.push(html2canvas(tmplts).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                slide.addImage({ data: imgData, x: 0, y: 0, w: '100%', h: '100%' });
            }));
        });
    
        Promise.all(promises).then(() => {
            pptx.writeFile({ fileName: "presentation.pptx" });
        });
      
      }
    
    

    return (
        <>
            <Temp />
            {add}
            <div className="bkg">
                <button id="add" onClick={handleAdd}>ADD ANOTHER SLIDE</button>
                <button id="add" onClick={handleunimg}>ADD SLIDE WITHOUT PIC</button>
                <button onClick={Download}>Download as PPT</button>
            </div>
        </>
    );
}