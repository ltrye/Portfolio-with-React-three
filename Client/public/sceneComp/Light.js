import React, { useContext, useEffect, useRef, useState } from 'react';

import ThemeContext from '../src/ThemeContext';
//////////////////////////

const lightScheme = {
  color: {
    r: 1,
    g: 1,
    b: 1,
  },
  ambient: 0.8,
};
const darkScheme = {
  color: {
    r: 0.16862745098039217,
    g: 0.22745098039215686,
    b: 0.4117647058823529,
  },
  ambient: 0.3,
};

function setColor(target, intense, scheme, targetScheme, rate) {
  target.current.color = {
    r: scheme.color.r + (targetScheme.color.r - scheme.color.r) * rate,
    g: scheme.color.g + (targetScheme.color.g - scheme.color.g) * rate,
    b: scheme.color.b + (targetScheme.color.b - scheme.color.b) * rate,
  };
  intense.current.intensity = scheme.ambient + (targetScheme.ambient - scheme.ambient) * rate;
}
let firstMount = true;
export default function Light() {
  console.log('LIGHT TRIGGER!');

  // const { colorNow } = useControls({ colorNow: { r: 0, g: 0, b: 0 } });
  // const { ambiance } = useControls({ ambiance: 0.3 });
  const { theme } = useContext(ThemeContext);
  const sunLight = useRef(null);
  const ambientLight = useRef(null);
  const startTime = performance.now();
  useEffect(() => {
    sunLight.current.color =
      theme === 'dark'
        ? {
            r: 0.16862745098039217,
            g: 0.22745098039215686,
            b: 0.4117647058823529,
          }
        : {
            r: 1,
            g: 1,
            b: 1,
          };
  }, []);
  useEffect(() => {
    const duration = 220;

    function changeLight(currentTime) {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime <= duration) {
        const rate = elapsedTime / duration;
        if (theme === 'dark') setColor(sunLight, ambientLight, lightScheme, darkScheme, rate);
        else setColor(sunLight, ambientLight, darkScheme, lightScheme, rate);

        requestAnimationFrame(changeLight);
      }
    }

    if (!firstMount) {
      requestAnimationFrame(changeLight);
    }
    firstMount = false;
  }, [theme]);

  return (
    <>
      <pointLight distance={0} intensity={0.3} position={[0.8, 0.7, -0.05]}>
        <mesh scale={0}>
          <meshStandardMaterial />
          <boxGeometry />
        </mesh>
      </pointLight>

      <ambientLight ref={ambientLight} color="#B9F3FC" intensity={theme === 'dark' ? 0.3 : 0.8} />
      <directionalLight
        ref={sunLight}
        castShadow
        intensity={0.75}
        position={[-3, 5, -3]}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={20}
        shadow-cameraLeft={-50}
        shadow-cameraRight={50}
        shadow-cameraTop={170}
        shadow-cameraBottom={-50}
        shadow-normalBias={0.05}
        shadow-bias={0.0001}
        shadow-radis={0}
      />
    </>
  );
}
