import { useRef, useEffect } from 'react';

import * as style from './style';

export const getGradientPixel = (width, height, x, y, maskSize) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = centerY;

  const distFromCenter =
    Math.sqrt(Math.abs(centerX - x) ** 2 + Math.abs(centerY - y) ** 2) +
    (radius - maskSize);
  const colorFactor = distFromCenter / radius;
  return 1 - colorFactor;
};

export const Gradient = ({ width, height }) => {
  const canvasRef = useRef(null);

  const maskRadius = 0.5;
  const maskSize = width * maskRadius;

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.canvas.width = width;
      context.canvas.height = height;

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const pixel = getGradientPixel(width, height, x, y, maskSize);
          context.fillStyle = `rgba(${pixel * 255}, ${pixel * 255}, ${pixel * 255})`;
          context.fillRect(x, y, 1, 1);
        }
      }
    }
  });

  return (
    <style.container>
      <style.noiseMapCanvas ref={canvasRef} />
      <style.optionContainer />
    </style.container>
  );
};
