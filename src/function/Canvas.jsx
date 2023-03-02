import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8080');

const Painting = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [painting, setPainting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 800;
    canvas.height = 600;
    const context = canvas.getContext('2d');
    context.lineJoin = 'round';
    context.lineWidth = 2.5;
    context.strokeStyle = '#000000';
    setCtx(context);
  }, []);

  useEffect(() => {
    if (!ctx) return;

    socket.on('message', (data) => {
      const { type, x, y } = JSON.parse(data);

      if (type === 'mousedown') {
        setPainting(true);
        ctx.beginPath();
        ctx.moveTo(x, y);
      } else if (type === 'mousemove') {
        if (painting) {
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      } else if (type === 'mouseup' || type === 'mouseleave') {
        setPainting(false);
      }
    });
  }, [ctx]);

  const handleMouseDown = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    socket.send(JSON.stringify({ type: 'mousedown', x, y }));
  };

  const handleMouseMove = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    if (painting) {
      socket.send(JSON.stringify({ type: 'mousemove', x, y }));
    }
  };

  const handleMouseUp = () => {
    socket.send(JSON.stringify({ type: 'mouseup' }));
  };

  const handleMouseLeave = () => {
    socket.send(JSON.stringify({ type: 'mouseleave' }));
  };

  return (
    <Background>
      <canvas
        className="canvas"
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      ></canvas>
    </Background>
  );
};

export default Painting;

const Background = styled.div`
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 1300px;
  height: 800px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;