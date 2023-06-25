import { PerlinNoise } from './components/PerlinNoise';
import { Gradient } from './components/GetRadicalGradientMask';

const App = () => {
  const width = 500;
  const height = 500;

  PerlinNoise(width, height);
  Gradient(width, height);

  return (
    <>
      <PerlinNoise width={width} height={height} />
      <Gradient width={width} height={height} />
    </>
  );
};

export default App;
