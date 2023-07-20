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
import Floor from '../sceneComp/Floor';

//HTML ELEMENT

//SCENE///////////////////////////////////
export default function Scene() {
  // const [currCam, switchCam] = useState('Ortho');
  const light = useRef();
  //Theme context

  ////
  useEffect(() => {
    console.log(light.current);
    // if (light.current) light.current.color.r -= 10;
  });

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
          <Trye castShadow position={[0, 0, 0]} scale={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
