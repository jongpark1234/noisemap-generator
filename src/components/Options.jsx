import 'rc-slider/assets/index.css';
import * as style from './style';

export const Options = ({
  frequency,
  setFrequency,
  octave,
  setOctave,
  seed,
  setSeed,
  landToggle,
  setLandToggle,
  landNoiseThreshold,
  setLandNoiseThreshold,
  maskRadius,
  setMaskRadius,
}) => {
  return (
    <style.optionContainer>
      <style.sliderContainer>
        <span>Frequency</span>
        <style.slider
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
        <style.slider
          min={0}
          max={16}
          defaultValue={octave}
          onChange={(e) => setOctave(e)}
        />
        <span>{octave}</span>
      </style.sliderContainer>
      <style.sliderContainer>
        <span>Land Threshold</span>
        <style.slider
          min={0}
          max={1}
          step={0.1}
          defaultValue={landNoiseThreshold}
          onChange={(e) => setLandNoiseThreshold(e)}
        />
        <span>{landNoiseThreshold}</span>
      </style.sliderContainer>
      <style.sliderContainer>
        <span>Seed</span>
        <style.button onClick={() => setSeed(Math.floor(Math.random() * 100000))}>
          Change Seed
        </style.button>
        <span>{seed}</span>
      </style.sliderContainer>
      <style.sliderContainer>
        <span>Apply Threshold</span>
        <style.button onClick={() => setLandToggle((prev) => !prev)}>
          {landToggle ? 'Now Applying' : 'Click for Apply'}
        </style.button>
      </style.sliderContainer>
      <style.sliderContainer>
        <span>Mask Radius</span>
        <style.slider
          min={0}
          max={1}
          step={0.1}
          defaultValue={maskRadius}
          onChange={(e) => setMaskRadius(e)}
        />
      </style.sliderContainer>
    </style.optionContainer>
  );
};
