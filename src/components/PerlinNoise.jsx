import { useRef } from 'react';
import { makeNoise2D } from 'fast-simplex-noise';
import random from 'seedrandom';

import { Canvas } from './style';

export const PerlinNoise = ({ width, height }) => {
  const resolution = 75;
  const amplitude = 255;

  const noiseMaker = makeNoise2D(random(String(Math.random())));

  const canvasRef = useRef(null);
  const context = canvasRef.getContext('2d');

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const noise =
        (1 + noiseMaker(x / resolution, (y / resolution) * 2)) * (amplitude / 2);

      canvasRef.fillStyle = `rgba(${noise}, ${noise}, ${noise})`;
      context.fillRect(x, y, 1, 1);
    }
  }
  return <Canvas ref={canvasRef} />;
};
