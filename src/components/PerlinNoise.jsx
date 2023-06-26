import { useRef, useState, useEffect } from 'react';
import FastNoise from 'fastnoise-lite';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import * as style from './style';

export const PerlinNoise = ({ width, height }) => {
  const [frequency, setFrequency] = useState(0.0125);
  const [octave, setOctave] = useState(3);
  const [seed, setSeed] = useState(Math.random());
  const [landNoiseThreshold, setLandNoiseThreshold] = useState(0.3);

  const canvasRef = useRef(null);

  const noise = new FastNoise();
  noise.SetNoiseType(FastNoise.NoiseType.Perlin);
  noise.SetFractalType(FastNoise.FractalType.FBm);
  noise.SetFrequency(frequency);
  noise.SetFractalOctaves(octave);
  noise.SetSeed(seed);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.canvas.width = width;
      context.canvas.height = height;
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const noiseColorFactor = (noise.GetNoise(x, y) + 1) * 0.5 * 255;
          context.fillStyle = `rgba(${noiseColorFactor}, ${noiseColorFactor}, ${noiseColorFactor})`;
          context.fillRect(x, y, 1, 1);
        }
      }
    }
  });

  return (
    <style.container>
      <style.noiseMapCanvas ref={canvasRef} />
      <style.optionContainer>
        <style.sliderContainer>
          <span>Frequency</span>
          <Slider
            min={0}
            max={1}
            step={0.001}
            defaultValue={frequency}
            onChange={(e) => setFrequency(e)}
          />
          <span>{frequency}</span>
        </style.sliderContainer>
        <style.sliderContainer>
          <span>Octave</span>
          <Slider min={0} max={16} defaultValue={octave} onChange={(e) => setOctave(e)} />
          <span>{octave}</span>
        </style.sliderContainer>
      </style.optionContainer>
    </style.container>
  );
};
