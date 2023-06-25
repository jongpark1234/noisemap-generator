import { PerlinNoise } from "./PerlinNoise";
import { Gradient } from "./GetRadicalGradientMask";
import { Vector2 } from "babylonjs";
const inverseLerp = (min, max, value) => {
  return (value - min) / (max - min);
};

function App() {
  const width = 500;
  const height = 500;

  PerlinNoise(width, height);
  Gradient(width, height);

  return <></>;
}

export default App;
