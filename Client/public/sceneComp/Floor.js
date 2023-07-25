import React, { useRef, useEffect, useContext, useState } from 'react';
import { Points, BufferGeometry, BufferAttribute, PointsMaterial } from 'three';
import { useThree } from '@react-three/fiber';

import ThemeContext from '../src/ThemeContext';
import colorAnimation from '../utils/colorAnimation';
import hexConverter from '../utils/hexToRGB';

const darkTheme = hexConverter('#0A2647');
const lightTheme = {
  r: 0.00972121731707524,
  g: 0.3864294337766795,
  b: 0.6172065624120635,
};

let isFirstTrigger = true;
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

  //Initial color base on cookies
  useEffect(() => {
    floor.current.material.color =
      theme === 'dark'
        ? {
            b: 0.2784313725490196,
            g: 0.14901960784313725,
            r: 0.0392156862745098,
          }
        : {
            r: 0.00972121731707524,
            g: 0.3864294337766795,
            b: 0.6172065624120635,
          };
    isFirstTrigger = false;
  }, []);
  useEffect(() => {
    // console.log(floor.current.material.color);
    if (!isFirstTrigger) {
      if (theme === 'dark') colorAnimation(250, floor, floor.current.material.color, darkTheme);
      else colorAnimation(220, floor, floor.current.material.color, lightTheme);
    }
  }, [theme]);
  return (
    <mesh ref={floor} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[30, 30]} />
      <meshLambertMaterial shininess={0} />
    </mesh>
  );
}
