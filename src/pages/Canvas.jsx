import React,{useState} from 'react';
import Header from '../components/canvas/CanvasHeader';
import Painting from "../components/canvas/Painting"
import Tool from '../components/canvas/ToolBox';

const Canvas = () => {
    const [canvas, setCanvas] = useState(null);
    console.log("넘어오는 canvas값 확인하기 : ",canvas)
    return (
        <>  
        <Header canvas = {canvas}>
        </Header>
            <Painting setCanvas={setCanvas}/>
        </>
    )
}

 export default Canvas;