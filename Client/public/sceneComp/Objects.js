import React, { useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

import { useSnapshot } from 'valtio';
import { Vector3 } from 'three';
import { state } from '../src/CamChange';

export default function Objects() {
  const point = useRef();
  const nav = useSnapshot(state);

  const cam = useThree((thisCam) => thisCam.camera);
  const close = new Vector3(0, 1, 0);

  useFrame(() => {
    cam.lookAt(point.current.position);
    const open = new Vector3(window.innerWidth / window.innerHeight, 1, 0);

    point.current.position.lerp(
      nav.nav === 'About' && window.innerWidth >= 1024 ? open : close,
      0.025
    );
  });

  return (
    <mesh ref={point} castShadow receiveShadow scale={0} position={[0, 1, 0]} rotation={[0, 0, 0]}>
      <boxGeometry />
      <meshStandardMaterial opacity={0} transparent />
    </mesh>
  );
}
