import React, { useEffect } from 'react';
import { OrthographicCamera } from '@react-three/drei';

import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

export default function Camera() {
  const camPos = new Vector3();

  const { mouse } = useThree();

  useEffect(() => {
    function setPos(e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', setPos);

    setTimeout(() => window.removeEventListener('mousemove', setPos), 2000);
  }, []);
  useFrame(({ camera }) => {
    camPos.set(mouse.x, 3.5 - mouse.y, -5);

    camera.position.lerp(camPos, 0.015);
  });

  return (
    <>
      {/* <MoveCam /> */}
      <OrthographicCamera
        makeDefault
        dpr={[1, 2]}
        position={[0, 4, -5]}
        zoom={window.innerWidth < 600 ? 140 : 190}
        near={0.1}
        far={1000}
      />
    </>
  );
}
