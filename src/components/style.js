import { styled } from 'styled-components';

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
  row-gap: 10px;
`;

export const sliderContainer = styled.div`
  width: 70%;
  display: flex;
  word-break: unset;
  align-items: center;
  gap: 30px;
`;

export const noiseMapCanvas = styled.canvas`
  width: 500px;
  height: 500px;
`;
