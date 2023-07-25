import React, { useContext, useEffect, useRef, useMemo } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { LoopOnce } from 'three';
import { useThree } from '@react-three/fiber';

// import ThemeContext from '../src/ThemeContext';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

//SET THE URL OF GLTF MODEL

// useFrame((state, delta) => {});
const treeList = ['plant', 'plantmd', 'flower', 'rock'];
export default function Plant({ position, destroy, type }) {
  let modelUrl;
  switch (type) {
    case 0:
      modelUrl = new URL('./treeModel/plant.gltf', import.meta.url);
      break;
    case 1:
      modelUrl = new URL('./treeModel/plantmd.gltf', import.meta.url);
      break;
    case 2:
      modelUrl = new URL('./treeModel/flower.gltf', import.meta.url);
      break;
    case 3:
      modelUrl = new URL('./treeModel/rock.gltf', import.meta.url);
      break;

    default:
      modelUrl = new URL('./treeModel/plant.gltf', import.meta.url);
  }

  const { gl } = useThree();
  const { scene } = useGLTF(modelUrl.href);
  const cloned = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    cloned.traverse((mesh) => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      if (mesh.type === 'group') {
        mesh.children.forEach((child) => {
          child.castShadow = true;
          child.receiveShadow = true;
        });
      }
    });
    cloned.castShadow = true;
  }, []);

  scene.castShadow = true;

  const plant = useRef();
  const { animations } = useGLTF(modelUrl.href);
  const { actions, mixer } = useAnimations(animations, plant);
  const anim = Object.keys(actions)[0];

  useEffect(() => {
    actions[anim].play();
    actions[anim].setLoop(LoopOnce);
    actions[anim].clampWhenFinished = true;
  }, [mixer]);
  return (
    <primitive
      onPointerOver={(e) => {
        e.stopPropagation();
        gl.domElement.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        gl.domElement.style.cursor = 'auto';
      }}
      onClick={(e) => {
        e.stopPropagation();
        actions[anim].timeScale = -1;

        actions[anim].paused = false;

        setTimeout(() => destroy(), actions[anim].time * 1000);
      }}
      ref={plant}
      position={position}
      castShadow
      object={cloned}
    />
  );
}
let modelUrl = new URL('./treeModel/plant.gltf', import.meta.url);
useGLTF.preload(modelUrl.href);
modelUrl = new URL('./treeModel/plantmd.gltf', import.meta.url);
useGLTF.preload(modelUrl.href);
