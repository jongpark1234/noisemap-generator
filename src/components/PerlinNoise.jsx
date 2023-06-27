import { useRef, useEffect } from 'react';

import * as style from './style';

export const PerlinNoise = ({
  noiseMap,
  width,
  height,
  landToggle,
  landNoiseThreshold,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.canvas.width = width;
      context.canvas.height = height;

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          let noise = noiseMap[x][y];
          if (landToggle) {
            noise = noise > landNoiseThreshold ? 1 : 0;
          }
          context.fillStyle = `rgba(${noise * 255}, ${noise * 255}, ${noise * 255})`;
          context.fillRect(x, y, 1, 1);
        }
      }
    }
  }, [noiseMap, width, height, landToggle, landNoiseThreshold]);

  return <style.noiseMapCanvas ref={canvasRef} />;
};
