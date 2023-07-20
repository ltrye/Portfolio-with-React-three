import React, { useRef, useEffect, useContext } from 'react';
import { Points, BufferGeometry, BufferAttribute, PointsMaterial } from 'three';
import { useThree } from '@react-three/fiber';

import ThemeContext from '../src/ThemeContext';
import colorAnimation from '../utils/colorAnimation';
import hexConverter from '../utils/hexToRGB';

const darkTheme = hexConverter('#0A2647');
const lightTheme = hexConverter('#19A7CE');

export default function Floor() {
  const { theme } = useContext(ThemeContext);

  const floor = useRef(null);
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    const particlesCount = 2300;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i += 1) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    const particlesGeometry = new BufferGeometry();
    particlesGeometry.setAttribute('position', new BufferAttribute(positions, 3));

    const particlesMaterial = new PointsMaterial({
      color: 0xffffff,
      sizeAttenuation: true,
      size: 3,
    });

    ///-------------Points--------------------//
    const particles = new Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
  }, []);

  useEffect(() => {
    if (theme === 'dark') colorAnimation(250, floor, lightTheme, darkTheme);
    else colorAnimation(220, floor, darkTheme, lightTheme);
  }, [theme]);
  return (
    <mesh ref={floor} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[30, 30]} />
      <meshLambertMaterial shininess={0} color="#19A7CE" />
    </mesh>
  );
}
