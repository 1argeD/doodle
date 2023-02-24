import React from 'react';
import Header2 from '../components/CanvasHeader';
import Painting from "../function/Canvas"

const Canvas = () => {
    return (
        <>  
            <Header2 IconType={"ArrowBack"}/>
            <Painting />
        </>
    )
}

 export default Canvas;