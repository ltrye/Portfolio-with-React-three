import React, { useContext, useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import ThemeContext from '../src/ThemeContext';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

//SET THE URL OF GLTF MODEL
const modelUrl = new URL('./gltf/ModelNew.gltf', import.meta.url);

// useFrame((state, delta) => {});
export default function Trye({ setIsLoading }) {
  const { scene } = useGLTF(modelUrl.href);
  const { theme } = useContext(ThemeContext);
  const lamp = useRef();
  useEffect(() => {
    scene.traverse((mesh) => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      if (mesh.type === 'group') {
        mesh.children.forEach((child) => {
          child.castShadow = true;
          child.receiveShadow = true;
        });
      }

      if (mesh.name === 'Lamp') {
        lamp.current = mesh.children[0].material;

        lamp.current.emissive = {
          isColor: true,
          r: 0.8705882352941177,
          g: 0.8392156862745098,
          b: 0.5215686274509804,
        };
      }
    });
    scene.castShadow = true;
  }, []);

  useEffect(() => {
    lamp.current.emissiveIntensity = theme === 'dark' ? 0.6 : 0;
  });
  scene.castShadow = true;

  const word = useRef();
  const { animations } = useGLTF(modelUrl.href);
  const { actions, mixer } = useAnimations(animations, word);
  useEffect(() => {
    actions.text.play();
  }, [mixer]);
  //Remove loading screen
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return <primitive ref={word} castShadow object={scene} />;
}
// useGLTF.preload(modelUrl.href);
