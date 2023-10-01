import React from "react";
import CreateBox from "../components/canvas/CreateBox";
import Header from "../components/GlobalHeader";

function CreateCanvas() {
    
    window.React1 = require('react');
    require('react-dom');
    window.React2 = require('react');
    console.log(window.React1 === window.React2)
    return (
        <>
        <Header></Header>
        <CreateBox/>
    </>
    )
}

export default CreateCanvas;