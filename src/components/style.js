import { styled } from 'styled-components';
import Slider from 'rc-slider';

export const container = styled.div`
  width: 100%;
  display: flex;
`;

export const optionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`;

export const sliderContainer = styled.div`
  width: 70%;
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
