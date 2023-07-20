import React, { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { CameraHelper } from 'three';

export default function CamHelper() {
  const cam = useThree((state) => state.camera);
  const helperRef = useRef();

  // Create a new CameraHelper and add it to the scene when the component mounts
  React.useEffect(() => {
    helperRef.current = new CameraHelper(cam);
    cam.add(helperRef.current);

    // Remove the helper when the component unmounts
    return () => {
      cam.remove(helperRef.current);
      helperRef.current = null;
    };
  }, [cam]);

  return null;
}
