import React, { useState } from 'react';
import { Temp, Temp1, Unimage } from './Temp'; // Adjust import path if needed
import './App.css';
import html2canvas from 'html2canvas';
import PptxGenJS from 'pptxgenjs';

export default function Inputpage(j) {
    const [cls, setCls] = useState(j.j);
    const [add, setAdd] = useState([]);
    console.log(j);

    function handleAdd() {
        let k=localStorage.getItem('digit');
    setCls(k);
        setAdd(prev => [...prev, <Temp1 cl={`ppt${cls}`} id={`${cls}`} key={`ppt${cls}`} />]);
    }

    function handleUnimg() {
        let k=localStorage.getItem('digit');
    setCls(k);
        setAdd(prev => [...prev, <Unimage cl={`ppt${cls}`} id={`${cls}`} key={`ppt${cls}`} />]);
    }

    function downloadPPT() {
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
            {add}
            <div className="bkg">
                <button id="add" onClick={handleAdd}>ADD ANOTHER SLIDE</button>
                <button id="add" onClick={handleUnimg}>ADD SLIDE WITHOUT PIC</button>
                <button onClick={downloadPPT}>Download as PPT</button>
            </div>
        </>
    );
}
