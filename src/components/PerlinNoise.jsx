import { useRef, useState, useEffect } from 'react';
import { makeNoise2D } from 'fast-simplex-noise';
import random from 'seedrandom';

import { Canvas } from './style';

export const getNoisePixel = (x, y, noiseMaker, resolution, amplitude) => {
  return (1 + noiseMaker(x / resolution, y / resolution)) * (amplitude / 2);
};

export const PerlinNoise = ({ width, height }) => {
  const [resolution] = useState(150);
  const [amplitude] = useState(255);
  const [seed] = useState(Math.random());

  const noiseMaker = makeNoise2D(random(String(seed)));
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.canvas.width = width;
      context.canvas.height = height;
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const noise = getNoisePixel(x, y, noiseMaker, resolution, amplitude);
          context.fillStyle = `rgba(${noise}, ${noise}, ${noise})`;
          context.fillRect(x, y, 1, 1);
        }
      }
    }
  });

  return <Canvas ref={canvasRef} />;
};
