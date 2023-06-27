import { useRef, useEffect } from 'react';

import * as style from './style';

export const Gradient = ({ gradientMap, width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.canvas.width = width;
      context.canvas.height = height;

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const pixel = gradientMap[x][y];
          context.fillStyle = `rgba(${pixel * 255}, ${pixel * 255}, ${pixel * 255})`;
          context.fillRect(x, y, 1, 1);
        }
      }
    }
  });

  return <style.noiseMapCanvas ref={canvasRef} />;
};
