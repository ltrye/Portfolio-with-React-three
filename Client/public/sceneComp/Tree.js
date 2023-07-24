import React, { useContext, useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3, Euler } from 'three';
import Plant from './Plant';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import TreeContext from '../src/TreeContext';
//Binding key
// const valid = ['a', 's', 'w', 'd', 'Shift'];
const move = ['a', 's', 'w', 'd'];
//Preventing spamming
let isPlanting = false;

//SET THE URL OF GLTF MODEL
const modelUrl = new URL('./gltf/tree.gltf', import.meta.url);

// useFrame((state, delta) => {});
const movement = new Vector3();
const rotation = new Euler(0, Math.PI, 0, 'YXZ');

export default function Tree({ plantArray, setPlantArray }) {
  const { scene } = useGLTF(modelUrl.href);
  const speed = 0.008;
  //Get context
  const { selectedTree, setSelectedTree } = useContext(TreeContext);

  // Animation state
  const [isPlay, setIsPlay] = useState(false);
  //Tracking key-press
  const [keysPressed, setKeysPressed] = useState(new Set());
  //Character
  const characterRef = useRef();
  //Plant array

  //Planting tree function
  const planting = () => {
    const faceDirection = (characterRef.current.rotation.y * 180) / Math.PI;
    const curPostion = [...characterRef.current.position];
    switch (faceDirection) {
      case 0:
        curPostion[2] += 0.5;
        break;
      case 90:
        curPostion[0] += 0.5;
        break;
      case -90:
        curPostion[0] -= 0.5;
        break;
      default:
        curPostion[2] -= 0.5;
    }

    setPlantArray((prevArray) => [
      ...prevArray,
      { pos: curPostion, id: performance.now(), type: selectedTree },
    ]);
  };
  //Add shadow to mesh on mount
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
    });
    scene.castShadow = true;
    scene.receiveShadow = true;
  }, []);

  //Animation
  const { animations } = useGLTF(modelUrl.href);
  const { actions } = useAnimations(animations, characterRef);

  // Function to handle key presses
  const handleKeyDown = (event) => {
    const { key } = event;
    // if (!valid.some((val) => key === val)) return;
    //PRESS F TO PLANT TREE
    if (key === 'f') {
      if (!isPlanting) planting();
      isPlanting = true;
    }
    if (key === 'Shift') setKeysPressed((prevKeys) => new Set(prevKeys.add(key)));
    else setKeysPressed((prevKeys) => new Set(prevKeys.add(...key.toLowerCase())));
  };

  // Function to handle key releases
  const handleKeyUp = (event) => {
    const { key } = event;

    if (key === 'f') isPlanting = false;
    setKeysPressed((prevKeys) => {
      const newKeys = new Set(prevKeys);
      newKeys.delete(key.toLowerCase());
      newKeys.delete(key);
      return newKeys;
    });
  };

  // Add event listeners for key presses and releases
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedTree]);
  //PLAY ANIMATION
  useEffect(() => {
    if (isPlay) actions.Run.play();
    else actions.Run.stop();
  }, [isPlay]);

  // Update character position in each frame
  useFrame(() => {
    // Update character rotation
    // rotation.setFromQuaternion(characterRef.current.quaternion);
    // console.log(characterRef.current.quaternion);

    // Calculate movement based on keys pressed
    if (keysPressed.has('w')) movement.z = keysPressed.has('Shift') ? 2 : 1;
    if (keysPressed.has('s')) movement.z = keysPressed.has('Shift') ? -2 : -1;
    if (keysPressed.has('a')) movement.x = keysPressed.has('Shift') ? 2 : 1;
    if (keysPressed.has('d')) movement.x = keysPressed.has('Shift') ? -2 : -1;
    //Shift to speed up
    // Update character rotation

    // Calculate rotation based on movement direction
    if (movement.x !== 0 || movement.z !== 0) {
      rotation.y = Math.atan2(movement.x, movement.z);
    }
    characterRef.current.quaternion.setFromEuler(rotation);
    // Set animation state based on keysPressed set
    //If at lease one key in Move appear in keysPress, play()

    if (!isPlay && move.some((key) => keysPressed.has(key))) {
      setIsPlay(true);
    } else if (!move.some((key) => keysPressed.has(key))) setIsPlay(false);

    characterRef.current.position.add(movement.multiplyScalar(speed));
    //RESET MOVEMENT EACH FRAME
    movement.x = 0;
    movement.z = 0;
    // console.log(movement.multiplyScalar(speed));
  });

  return (
    <>
      <primitive
        rotation={[0, Math.PI, 0]}
        position={[1.2, -0.03, -0.9]}
        ref={characterRef}
        castShadow
        object={scene}
      />
      {plantArray.length !== 0 &&
        plantArray.map((el, index) => (
          <Plant
            destroy={() => {
              setPlantArray((prevArray) => prevArray.filter((filter) => filter.id !== el.id));
            }}
            key={el.id}
            type={el.type}
            position={el.pos}
          />
        ))}
    </>
  );
}
// useGLTF.preload(modelUrl.href);
