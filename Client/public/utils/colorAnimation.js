function setColor(targetElement, currentColor, targetColor, rate) {
  targetElement.current.material.color = {
    r: currentColor.r + (targetColor.r - currentColor.r) * rate,
    g: currentColor.g + (targetColor.g - currentColor.g) * rate,
    b: currentColor.b + (targetColor.b - currentColor.b) * rate,
  };
}
export default function colorAnimation(duration, targetElement, currentColor, targetColor) {
  let startTime;
  function colorUpdater(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      const rate = elapsedTime / duration;

      setColor(targetElement, currentColor, targetColor, rate);
      requestAnimationFrame(colorUpdater);
    } else setColor(targetElement, currentColor, targetColor, 1);
  }

  requestAnimationFrame(colorUpdater);
}
