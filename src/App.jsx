import { useState } from 'react';
import { PerlinNoise } from './components/PerlinNoise';
import { Gradient } from './components/Gradient';
import FastNoise from 'fastnoise-lite';

export const getNoiseMap = (fastNoise, width, height, frequency, octave, seed) => {
  const noiseMap = [];
  fastNoise.SetNoiseType(FastNoise.NoiseType.Perlin);
  fastNoise.SetFractalType(FastNoise.FractalType.FBm);
  fastNoise.SetFrequency(frequency);
  fastNoise.SetFractalOctaves(octave);
  fastNoise.SetSeed(seed);
  for (let x = 0; x < width; x++) {
    const noiseColumn = [];
    for (let y = 0; y < height; y++) {
      const noise = (fastNoise.GetNoise(x, y) + 1) / 2;
      noiseColumn.push(noise);
    }
    noiseMap.push(noiseColumn);
  }
  return noiseMap;
};

export const getGradientMap = (width, height, maskSize) => {
  const gradientMap = [];

  const centerX = width / 2;
  const centerY = height / 2;
  const radius = centerY;

  for (let x = 0; x < width; x++) {
    const gradientColumn = [];
    for (let y = 0; y < height; y++) {
      const distFromCenter =
        Math.sqrt(Math.abs(centerX - x) ** 2 + Math.abs(centerY - y) ** 2) +
        (radius - maskSize);
      const colorFactor = distFromCenter / radius;
      gradientColumn.push(1 - colorFactor);
    }
    gradientMap.push(gradientColumn);
  }
  return gradientMap;
};

const App = () => {
  const width = 500;
  const height = 500;

  const [frequency, setFrequency] = useState(0.01);
  const [octave, setOctave] = useState(3);
  const [seed, setSeed] = useState(Math.floor(Math.random() * 100_000_000));
  const [landNoiseThreshold, setLandNoiseThreshold] = useState(0.2);
  const [landToggle, setLandToggle] = useState(false);
  const [maskRadius, setMaskRadius] = useState(0.5);

  const fastNoise = new FastNoise();
  fastNoise.SetNoiseType(FastNoise.NoiseType.Perlin);
  fastNoise.SetFractalType(FastNoise.FractalType.FBm);
  fastNoise.SetFrequency(frequency);
  fastNoise.SetFractalOctaves(octave);
  fastNoise.SetSeed(seed);

  const noiseMap = getNoiseMap(fastNoise, width, height, frequency, octave, seed);
  const gradientMap = getGradientMap(width, height, width * maskRadius);

  return (
    <>
      <PerlinNoise
        noiseMap={noiseMap}
        width={width}
        height={height}
        landToggle={landToggle}
        landNoiseThreshold={landNoiseThreshold}
      />
      <Gradient gradientMap={gradientMap} width={width} height={height} />
    </>
  );
};

export default App;
