import { styled } from 'styled-components';
import Slider from 'rc-slider';

export const container = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
`;

export const optionContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const sliderContainer = styled.div`
  min-width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const slider = styled(Slider)`
  width: 100px;
`;

export const button = styled.button`
  width: 100px;
  aspect-ratio: 4 / 1;
`;

export const noiseMapCanvas = styled.canvas`
  width: 500px;
  height: 500px;
`;
