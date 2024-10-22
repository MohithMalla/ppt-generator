import React, { useState,useRef } from "react";
import {classes} from './items.js';
import './App.css'
import html2canvas from "html2canvas";
import PptxGenJS from "pptxgenjs";
export  function Temp() {
    const [file, setFile] = useState();
    function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    
  }
  function handleInput(){

    setData(prev=>[inpt.current.value,inpt2.current.value])

  }
  const [data,setData]=useState([]);
 const inpt=useRef(0);
 const inpt2=useRef(0)
 const clssd="clssd"
 const [remove,setRemove]=useState(true)
 const i=localStorage.getItem('digit')
  return (
    <div className="ppt">
      
      <div className="page1">
        <div className="input">
          <div id="brd">
            <h4>Title</h4>
            <textarea></textarea>
          </div>
          <div id="brd">
            <h4>Subtitle</h4>
            <textarea></textarea>
          </div>
            <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <button onClick={handleInput}>save</button>
        </div>
        <div className= {`${classes[i]} clssd`}>
            <h1 align="center">This is heading</h1>
            {file && <img id="imag" src={file} alt="Uploaded" />}
        </div>
       
    </div>
    
    
    </div>
  );
}



function Temp1({cl,id}){
  const [file, setFile] = useState();
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
  return(
    <div className={cl} id={id}>
        
        <div className="page1">
          <div className="input"  >
              <h4 className="brd">Title</h4>
              <input ref={inpt} ></input>
              <h4 className="brd">Subtitle</h4>
              <textarea ref={inpt2}></textarea>
              <h2>Add Image:</h2>
        <input type="file" onChange={handleChange} />
        
            <button onClick={handleInput}>save</button>
        
          </div>
          <div className= {`${classes[i]} clssd`}>
              <h1 align="center">{data[0]}</h1>
              <p>{data[1]}</p>
              {file && <img id="imag" src={file} alt="Uploaded" />}
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
      <div className="input"  >
          <h4>Title</h4>
          <input ref={inpt} ></input>
          <h4>Subtitle</h4>
          <textarea ref={inpt2}></textarea>
      
    
    
        <button onClick={handleInput}>save</button>
    
      </div>
      <div className= {`${classes[i]} clssd`}>
          <h1 align="center">{data[0]}</h1>
          <p>{data[1]}</p>
          
      </div>
     
  </div>

  </div>
);
  }

export default function Inputpage(){
  const [cls,setCls]=useState(0)
  const [add,SetAdd]=useState([])
  
  
  function handleAdd(){
       setCls(cls+1)
       SetAdd(prev=>[...prev,<Temp1 cl={ppt `${cls}`} id={`${cls}`} />])

  }
  function handleunimg(){
    setCls(cls+1)
       SetAdd(prev=>[...prev,<Unimage cl={ppt `${cls}`} id={`${cls}`} />])
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
  return( <>    <Temp />
  <Temp />
  {add}
    <button id="add" onClick={handleAdd}>ADD ANOTHER SLIDE</button>
    <button id="unimg" onClick={handleunimg}>add slide without image</button>
        <button onClick={Download}>download</button>
    </>

  )




}