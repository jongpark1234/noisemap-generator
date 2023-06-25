import { useRef, useEffect } from 'react';

import { Canvas } from './style';

export const getGradientPixel = (width, height, x, y, maskSize) => {
  let gradient = 1;
  gradient /= ((x * y) / (width * height)) * (1 - x / width) * (1 - y / height);
  gradient -= 16;
  gradient /= maskSize;

  return gradient;
};

export const Gradient = ({ width, height }) => {
  const canvasRef = useRef(null);

  const maskRadius = 0.1;
  const maskSize = width * maskRadius;

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.canvas.width = width;
      context.canvas.height = height;

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const pixel = getGradientPixel(width, height, x, y, maskSize);
          if ((x === 1 && y === 1) || (x === 250 && y === 250)) {
            console.log(pixel);
          }
          context.fillStyle = `rgba(${pixel * 255}, ${pixel * 255}, ${pixel * 255})`;
          context.fillRect(x, y, 1, 1);
        }
      }
    }
  });

  return <Canvas ref={canvasRef} />;
};
