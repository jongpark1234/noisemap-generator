import { PerlinNoise } from './components/PerlinNoise';
import { Gradient } from './components/Gradient';

const App = () => {
  const width = 500;
  const height = 500;

  return (
    <>
      <PerlinNoise width={width} height={height} />
      <Gradient width={width} height={height} />
    </>
  );
};

export default App;
