import React from 'react';
import Header2 from '../components/CanvasHeader';
import Painting from "../function/Canvas"

const Canvas = () => {
    return (
        <>  
            <Header2 IconType={"ArrowBack"}/>
            <h3>캔버스 페이지</h3>
            <Painting />
        </>
    )
}

 export default Canvas;