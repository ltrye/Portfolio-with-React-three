export default function hexConverter(hex) {
  const color = { r: 0, g: 0, b: 0 };
  const hexArray = hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));
  color.r = hexArray[0] / 255;
  color.g = hexArray[1] / 255;
  color.b = hexArray[2] / 255;
  return color;
}
