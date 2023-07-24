import React, { useContext, useEffect, Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';

import { Vector3 } from 'three';
import CamHelper from '../sceneComp/CamHelper';

//ASSETS FOR SCENE
import Light from '../sceneComp/Light';
import Camera from '../sceneComp/Camera';
import Objects from '../sceneComp/Objects';
import Trye from '../sceneComp/Model';
import Tree from '../sceneComp/Tree';
import Floor from '../sceneComp/Floor';
import Plant from '../sceneComp/Plant';

//HTML ELEMENT
const initArray = [
  { pos: [-2.19, -0.03, 0.6], type: 2, id: 'i1' },
  { pos: [-2.2, -0.03, 2.1], type: 1, id: 'i2' },
  { pos: [2.19, -0.03, 1.2], type: 0, id: 'i3' },
  { pos: [1.8, -0.03, 2.2], type: 0, id: 'i4' },
  { pos: [-1.8, -0.03, 2.0], type: 3, id: 'i5' },
];
//SCENE///////////////////////////////////
export default function Scene() {
  // const [currCam, switchCam] = useState('Ortho');
  const light = useRef();
  //Theme context
  const [plantArray, setPlantArray] = useState([...initArray]);
  ////
  plantArray.forEach((el) => console.log(el.pos));

  return (
    <div className="absolute aspect-auto h-full w-full" id="canvas-container">
      <Canvas style={{ background: 'black' }} shadows>
        {/* <CamHelper /> */}
        {/* <gridHelper /> */}
        {/* <axesHelper /> */}
        {/* <OrbitControls /> */}

        <Camera />
        <Light />

        {/* <Camera /> */}
        <Objects />
        <Floor position={[0, 4, 0]} />

        <Suspense fallback={null}>
          <Trye castShadow position={[0, 0, 0]} />
          <Tree plantArray={plantArray} setPlantArray={setPlantArray} castShadow />
        </Suspense>
      </Canvas>
    </div>
  );
}
