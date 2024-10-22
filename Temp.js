import React, { useState, useRef } from "react";
import { classes } from './items.js';
import Intro from './demo.js';
import './App.css';

export function Temp({ cl, id }) {
    const [file, setFile] = useState(null);
    const [showIntro, setShowIntro] = useState(true);
    const [data, setData] = useState([]);
    const inpt = useRef(null);
    const inpt2 = useRef(null);

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    function handleInput() {
        setData([inpt.current.value, inpt2.current.value]);
    }

    function handleWrong() {
        setShowIntro(false);
    }

    return (
        <div className="cl" id={id}>
            {showIntro && (
                <div className="wrongclass">
                    <button className="wrong" onClick={handleWrong} style={{ backgroundColor: "red" }}>X</button>
                    <Intro />
                </div>
            )}
            <div className="page1">
                <div className="input">
                    <h4>Title</h4>
                    <input ref={inpt} />
                    <h4>Subtitle</h4>
                    <textarea ref={inpt2} />
                    <h2>Add Image:</h2>
                    <input type="file" onChange={handleChange} />
                    <button onClick={handleInput}>SAVE</button>
                </div>
                <div className={`${classes[id]} class`}>
                    <h1 className="class_head">{data[0]}</h1>
                    <p>{data[1]}</p>
                    {file && <img id="imag" src={file} alt="Uploaded" />}
                </div>
            </div>
        </div>
    );
}

export function Temp1({ cl, id }) {
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const inpt = useRef(null);
    const inpt2 = useRef(null);

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    function handleInput() {
        setData([inpt.current.value, inpt2.current.value]);
    }

    return (
        <div className={cl} id={id}>
            <div className="pages">
                <div id="input">
                    <h4>Title</h4>
                    <input ref={inpt} />
                    <h4>Subtitle</h4>
                    <textarea ref={inpt2} />
                    <h2>Add Image:</h2>
                    <input type="file" onChange={handleChange} />
                    <button id="savebtn" onClick={handleInput}>SAVE</button>
                </div>
                <div id="abc" className={`${classes[id]} clssd`}>
                    <div className="matter">
                        <h1 id="head" align="center">{data[0]}</h1>
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

export function Unimage({ cl, id }) {
    const [data, setData] = useState([]);
    const inpt = useRef(null);
    const inpt2 = useRef(null);

    function handleInput() {
        setData([inpt.current.value, inpt2.current.value]);
    }

    return (
        <div className={cl} id={id}>
            <div className="page1">
                <div id="input">
                    <h4>Title</h4>
                    <input ref={inpt} />
                    <h4>Subtitle</h4>
                    <textarea ref={inpt2} />
                    <button id="savebt" onClick={handleInput}>SAVE</button>
                </div>
                <div id="abc" className={`${classes[id]} clssd`}>
                    <div className="matter">
                        <h1 id="headnopic">{data[0]}</h1>
                        <p id="paranopic">{data[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
