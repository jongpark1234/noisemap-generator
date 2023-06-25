import { makeNoise2D } from "fast-simplex-noise";
import random from "seedrandom";

export const PerlinNoise = (width, height) => {
  const resolution = 75;
  const amplitude = 255;

  const canvas = document.getElementById("perlin");
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  const context = canvas.getContext("2d");

  const noiseMaker = makeNoise2D(random(String(Math.random())));

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const noise =
        (1 + noiseMaker(x / resolution, (y / resolution) * 2)) *
        (amplitude / 2);

      context.fillStyle = `rgba(${noise}, ${noise}, ${noise})`;

      context.fillRect(x, y, 1, 1);
    }
  }
};
