// Generate a gradient mask with a radial pattern
export const Gradient = (width, height) => {
  const canvas = document.getElementById("gradient");
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  const context = canvas.getContext("2d");

  const maskRadius = height * 0.5;

  // Iterate over each pixel in the mask
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let gradient = 1;

      gradient /=
        ((x * y) / (width * height)) * (1 - x / width) * (1 - y / height);
      gradient -= 16;
      gradient /= maskRadius;

      context.fillStyle = `rgba(${gradient}, ${gradient}, ${gradient})`;

      context.fillect(x, y, 1, 1);
    }
  }
};
