import React from 'react';
import Header from '../components/canvas/CanvasHeader';
import Painting from "../components/canvas/Painting"
import Tool from '../components/canvas/ToolBox';

const Canvas = () => {
    return (
        <>  
        <Header>
        </Header>
            <Painting />
        </>
    )
}

 export default Canvas;